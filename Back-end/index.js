import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './Components/authRoutes.js';
import path from 'path';
import connect from './Components/connection.js';
import dotenv from 'dotenv';
import reviewRoutes from './Components/reviewRoutes.js';
import Review from './models/Review.js';
import Login from './models/Login.js';
import jwt from 'jsonwebtoken';

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

// Add these routes before the review routes
app.post("https://skillhub-a286.onrender.com/loginS", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user and explicitly select password field
    const user = await Login.findOne({ email }).select('+password');
    
    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Remove password from response
    const userWithoutPassword = user.toJSON();

    res.status(200).json({
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Review Routes
app.post("/reviews", async (req, res) => {
  try {
    // Check if user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    
    const newReview = new Review({
      ...req.body,
      userId: req.user._id // Associate review with user
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .populate('userId', 'name email') // Populate user details
      .exec();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add authentication middleware
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Login.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Protected routes
app.use('/reviews', authenticateUser);

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