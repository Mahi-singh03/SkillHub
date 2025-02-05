import User from './User.js';

export const register = async (req, res) => {
  try {
    const { emailAddress, password, ...rest } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ emailAddress });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Create a new user
    const newUser = new User({
      emailAddress: emailAddress.toLowerCase(),
      password,
      ...rest
    });

    // Save user to DB
    await newUser.save();

    // Send response
    return res.status(201).json({
      user: newUser.toJSON(),
      message: 'Registration successful'
    });

  } catch (error) {
    console.error('Registration error:', error);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ error: messages.join('. ') });
    }

    // Handle duplicate email errors (MongoDB error code 11000)
    if (error.code === 11000) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Generic error response
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
