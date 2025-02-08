import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const ReviewSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number,
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", ReviewSchema);

// Create a new review
router.post("/", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 