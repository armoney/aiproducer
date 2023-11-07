import { NextResponse } from "next/server";

// Initialize stripe-node with beta-header
const stripe = require("stripe")(process.env.STRIPE_API_KEY, {
  apiVersion: "2023-08-16; embedded_checkout_beta=v2",
});

//GET session status
export async function GET(req, res) {
  const session = await stripe.checkout.sessions.retrieve(
    req.nextUrl.searchParams.get("session_id")
  );
  return NextResponse.json({
    status: session.status,
    payment_status: session.payment_status,
    customer_email: session.customer_details.email || null,
  });
}

export async function POST(req) {
  const name = req.nextUrl.searchParams.get("name");
  const jpid = req.nextUrl.searchParams.get("jpid");
  const price = req.nextUrl.searchParams.get("price");
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: name,
            images: [
              "https://seevassets.s3.us-east-2.amazonaws.com/SeeV_LandingPage_4_small.png",
            ],
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    ui_mode: "embedded",
    client_reference_id: jpid,
    return_url: `${req.nextUrl.protocol}//${req.nextUrl.host}/producer/confirmation?session_id={CHECKOUT_SESSION_ID}&&jpid=${jpid}`,
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}
