"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
  typescript: true,
});

export async function checkout(name: string, priceInCents: number) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: name,
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/store/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/store`,
    });

    return { url: session.url };
  } catch (error) {
    console.error("Stripe Error:", error);
    return { error: "Error creating checkout session" };
  }
}