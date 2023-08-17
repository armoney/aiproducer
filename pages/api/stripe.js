// Initialize stripe-node with beta-header
const stripe = require("stripe")(process.env.STRIPE_API_KEY, {
  apiVersion: "2022-11-15; embedded_checkout_beta=v1",
});

const getCheckoutSession = async function (req, res) {
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
  });

  res.send({ clientSecret: session.client_secret });
};

export default getCheckoutSession;
