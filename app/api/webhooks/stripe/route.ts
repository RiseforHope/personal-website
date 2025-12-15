import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
  typescript: true,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const PRINTIFY_SHOP_ID = process.env.PRINTIFY_SHOP_ID!;
const PRINTIFY_TOKEN = process.env.PRINTIFY_API_TOKEN!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature") as string;

  let event: Stripe.Event;

  // 1. SECURITY CHECK: Verify the signature
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook Signature Error: ${err.message}`);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // 2. Handle the "Checkout Completed" event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Extract Metadata (This is where the IDs will eventually come from)
    const { printify_product_id, printify_variant_id } = session.metadata || {};

    // Validate we have the necessary IDs to fulfill
    if (!printify_product_id || !printify_variant_id) {
      console.warn("Order received, but missing Printify IDs. Skipping auto-fulfillment.");
      // We return 200 OK so Stripe stops trying to send it.
      return NextResponse.json({ received: true });
    }

    // 3. Send to Printify
    try {
      await sendToPrintify(session, printify_product_id, printify_variant_id);
      console.log("Successfully sent order to Printify");
    } catch (error) {
      console.error("Printify API Failed:", error);
      // Still return 200 OK to Stripe to prevent retries loop, but log the error for you.
      return NextResponse.json({ received: true, status: "partial_failure" });
    }
  }

  return NextResponse.json({ received: true });
}

// --- HELPER FUNCTION: The Printify Logic ---
async function sendToPrintify(session: Stripe.Checkout.Session, productId: string, variantId: string) {
  const shipping = session.shipping?.address;
  const name = session.shipping?.name;

  if (!shipping || !name) throw new Error("Missing shipping info in Stripe Session");

  const payload = {
    label: `Stripe Order ${session.id.slice(-6)}`, // Short label for dashboard
    line_items: [
      {
        product_id: productId,
        variant_id: Number(variantId),
        quantity: 1,
      },
    ],
    shipping_method: 1, // 1 = Standard Shipping
    send_shipping_notification: true,
    address_to: {
      first_name: name.split(" ")[0] || "Guest",
      last_name: name.split(" ").slice(1).join(" ") || "",
      email: session.customer_details?.email || "no-email@example.com",
      phone: session.customer_details?.phone || "",
      country: shipping.country,
      region: shipping.state || "",
      address1: shipping.line1 || "",
      address2: shipping.line2 || "",
      city: shipping.city || "",
      zip: shipping.postal_code || "",
    },
  };

  const response = await fetch(`https://api.printify.com/v1/shops/${PRINTIFY_SHOP_ID}/orders.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${PRINTIFY_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Printify Error: ${response.status} ${errorText}`);
  }
}