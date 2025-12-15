"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover", // Use your version
  typescript: true,
});

export async function checkout(
  name: string,
  priceInCents: number,
  printifyProductId: string,
  printifyVariantId: string,
  quantity: number = 1 // <--- NEW: Accept quantity (default to 1)
) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB"],
      },
      metadata: {
        printify_product_id: printifyProductId,
        printify_variant_id: printifyVariantId,
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: name,
            },
            unit_amount: priceInCents,
          },
          quantity: quantity, // <--- NEW: Use the passed quantity

          // OPTIONAL: Allow them to change it AGAIN on the Stripe page
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/store/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/store`,
    });

    return { url: session.url };
  } catch (error: any) {
    console.error("Stripe Error:", error);
    return { error: error.message };
  }
}