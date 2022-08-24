import ReviewModuel from "../Models/ReviewModuel.js";

export const createReview = async (req, res) => {
  const data = req.body;
  const review = new ReviewModuel(data);
  try {
    await review.save();
    res.status(200).json("Review Created successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getAllReview = async (req, res) => {
  try {
    const data = await ReviewModuel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getUserReview = async (req, res) => {};
