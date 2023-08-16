// Initialize stripe-node with beta-header
const stripe = require("stripe")(
  "sk_test_51NfAD6GBN3j0TBw6TqZe6oB4gwvQ3wBWCHebw0c3uVeNRx7dSWtuANuELwp2K3qnRTKBVEbhczMQToe4djLpYJqx00CBq2bVZn",
  {
    apiVersion: "2022-11-15; embedded_checkout_beta=v1",
  }
);

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
