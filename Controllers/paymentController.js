import Stripe from "stripe";
const stripe = Stripe(
  "sk_test_51L17qxHBn8eTkaGlcj217sptb83z5vUYfcFpKoXtCcYZn8p0phj9I4ZHfxv0aAa60eTIK2jrtTXaqwxRpmIFvGv900ewdqqwRB"
);

export const paymentSystem = async (req, res) => {
  const { price } = req.body;
  const amount = price * 100;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    // console.log(paymentIntent.client_secret);
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json(error);
  }
};

// export const paymentSystem =  async (req, res) =>{}
