import dotenv from 'dotenv';
dotenv.config(); // Load .env variables

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // Changed bcrypt to bcryptjs
import { fileURLToPath } from 'url';
import path from 'path';

import connect from './Components/connection.js';
import  DataModel from './Components/Users.js';
import { validations, validate } from './Components/validations.js';


// Fix for `__dirname` in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Express App Initialization
const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' })); // Handle CORS
app.use(express.json()); // Parse JSON request bodies

// Connect to the Database
(async () => {
  try {
    await connect();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1); // Exit the process on connection failure
  }
})();

// Routes

/**
 * User Registration Route
 */
app.post('/Registration', validations, validate, async (req, res) => {
  const {
    fullName,
    fatherName,
    emailAddress,
    phoneNumber,
    selectedCourse,
    address,
    qualification,
    password,
  } = req.body;

  try {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new DataModel({
      fullName,
      fatherName,
      emailAddress,
      phoneNumber,
      selectedCourse,
      address,
      qualification,
      password: hashedPassword,
    });

    await newUser.save();
    const token = newUser.generateToken(); // Generate JWT token
    res.status(201).json({
      message: '✅ Registration successful',
      token,
      username: newUser.fullName,
    });
  } catch (err) {
    console.error('❌ Error saving user data:', err);
    res.status(500).json({ error: 'Error saving user data', details: err.message });
  }
});

/**
 * User Login Route
 */
app.post('/Login', async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    // Find the user by phone number
    const user = await DataModel.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ error: '❌ User not found. Please check the phone number.' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: '❌ Invalid password. Please try again.' });
    }

    // Generate a JWT token
    const token = user.generateToken();

    res.status(200).json({
      message: '✅ Login successful',
      token,
      username: user.fullName || user.phoneNumber,
    });
  } catch (err) {
    console.error('❌ Error during login:', err);
    res.status(500).json({ error: 'An error occurred during login', details: err.message });
  }
});

// Reviews Schema & Routes
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.model('Review', reviewSchema, 'Review');

/**
 * Add a Review
 */
app.post('/reviews', async (req, res) => {
  const { name, review, rating } = req.body;

  if (!name || !review || rating == null) {
    return res.status(400).json({ error: '❌ Please provide name, review, and rating' });
  }

  try {
    const newReview = new Review({ name, review, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    console.error('❌ Error saving review:', err);
    res.status(500).json({ error: 'Error saving review', details: err.message });
  }
});

/**
 * Get All Reviews
 */
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ _id: -1 }); // Sort reviews by latest
    res.json(reviews);
  } catch (err) {
    console.error('❌ Error fetching reviews:', err);
    res.status(500).json({ error: 'Error fetching reviews', details: err.message });
  }
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/Front-end/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/Front-end/build/index.html'));
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
