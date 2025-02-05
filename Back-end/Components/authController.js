import User from './User.js';

export const register = async (req, res) => {
  try {
    const { emailAddress, password, ...rest } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ emailAddress });
    if (existingUser) {
      return res.status(409).json({
        error: 'Email already registered'
      });
    }

    // Create new user
    const newUser = await User.create({
      emailAddress: emailAddress.toLowerCase(),
      password,
      ...rest
    });

    // Generate JWT token
    const token = newUser.generateAuthToken();

    // Send response
    res.status(201).json({
      user: newUser,
      token
    });

  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        error: messages.join('. ')
      });
    }
    
    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(409).json({
        error: 'Email already registered'
      });
    }

    // Generic error handler
    console.error('Registration error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
};