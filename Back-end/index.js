require('dotenv').config(); // Load .env variables
const express = require('express');
const cors = require('cors');
const path = require('path');
const connect = require('./Components/connection');
const { DataModel } = require('./Components/Users');
const { validations, validate } = require('./Components/validations');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json());

// Connect to the database
(async () => {
  try {
    await connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
})();

// Define routes
app.post('/Registration', validations, validate, async (req, res) => {
  const { fullName, fatherName, emailAddress, phoneNumber, selectedCourse, address, qualification, password } = req.body;
  try {
    const newUser = new DataModel({ fullName, fatherName, emailAddress, phoneNumber, selectedCourse, address, qualification, password });
    await newUser.save();
    const token = newUser.generateToken();
    res.status(201).json({ message: 'Registration successful', token, username: newUser.fullName });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ error: 'Error saving data', details: err.message });
  }
});

// Reviews
const reviewSchema = new mongoose.Schema({ name: String, review: String, rating: Number });
const Review = mongoose.model('Review', reviewSchema, 'Review');

app.post('/reviews', async (req, res) => {
  const { name, review, rating } = req.body;
  if (!name || !review || !rating) {
    return res.status(400).json({ error: 'Please provide name, review, and rating' });
  }
  try {
    const newReview = new Review({ name, review, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    console.error('Error saving review:', err);
    res.status(500).json({ error: 'Error saving review', details: err.message });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ _id: -1 });
    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ error: 'Error fetching reviews', details: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
