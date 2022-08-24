import ReviewModuel from "../Models/ReviewModuel.js";
import BookingModuel from "../Models/BookingModuel.js";

// create a review
export const createReview = async (req, res) => {
  const data = req.body;
  const review = new ReviewModuel(data);

  try {
    await review.save();
    const booking = await BookingModuel.findByIdAndUpdate(
      data.bookingId,
      { review: review._id },
      {
        new: true,
      }
    );
    res.status(200).json("Review Created successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all review
export const getAllReview = async (req, res) => {
  try {
    const data = await ReviewModuel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a user review
export const getUserReview = async (req, res) => {
  const email = req.params.email;
  const user = req.user;
  try {
    if (email === user) {
      const reviews = await ReviewModuel.find({ email: user });
      res.status(200).json(reviews);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
