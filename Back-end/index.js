import express from 'express';
import cors from 'cors';
import authRoutes from './Components/authRoutes.js';
import path from 'path';
import connect from './Components/connection.js';


// Fix for `__dirname` in ES modules
const __dirname = path.resolve();

// Initialize Express app
const app = express();




// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' })); // Handle CORS
app.use(express.json()); // Parse JSON request bodies
app.use(cors());
app.use(express.json());


app.use('/', authRoutes);

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
app.use('/', authRoutes);








// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!'
  });
});





// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/Front-end/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Front-end', 'build', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});