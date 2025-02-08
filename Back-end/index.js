import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './Components/authRoutes.js';
import path from 'path';
import connect from './Components/connection.js';
import dotenv from 'dotenv';
import reviewRoutes from './Components/reviewRoutes.js';
import Review from './models/Review.js';

// Load environment variables
dotenv.config();

// Fix for `__dirname` in ES modules
const __dirname = path.resolve();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' })); // Handle CORS
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/', authRoutes);
app.use('/reviews', reviewRoutes);

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

// Review Routes
app.post("/reviews", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err);
  res.status(500).json({ 
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

// Serve static files
app.use(express.static(path.join(__dirname, '/Front-end/build')));

// Handle all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Front-end', 'build', 'index.html'));
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});