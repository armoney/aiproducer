import { NextResponse } from "next/server";

// Initialize stripe-node with beta-header
const stripe = require("stripe")(process.env.STRIPE_API_KEY, {
  apiVersion: "2023-08-16; embedded_checkout_beta=v2",
});

//GET session status
export async function GET(req, res) {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  return NextResponse.json({
    status: session.status,
    payment_status: sesion.payment_status,
    customer_email: customer.email,
  });
}

export async function POST(req) {
  const jpid = req.nextUrl.searchParams.get("jpid");
  console.log("nextUrl: ", req.nextUrl);
  // console.log("request ", req.nextUrl.searchParams.get("jpid"));
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Video Resume",
          },
          unit_amount: 30000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    ui_mode: "embedded",
    client_reference_id: jpid,
    return_url: `${req.nextUrl.protocol}//${req.nextUrl.host}/confirmation?session_id={CHECKOUT_SESSION_ID}&&jpid=${jpid}`,
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}