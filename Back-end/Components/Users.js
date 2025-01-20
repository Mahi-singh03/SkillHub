const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the user schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'], // Email validation regex
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits'], // Phone number validation (10 digits)
  },
  selectedCourse: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Ensure password is at least 6 characters
  },
});

// Hash password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // If password is not modified, skip hashing
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10); // Hash the password with 10 rounds of salt
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to check if the entered password is valid
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password); // Compare the hashed password with the input
};

// Define the generateToken method
userSchema.methods.generateToken = function () {
  const payload = { id: this._id, email: this.emailAddress, name: this.fullName };
  const secretKey = process.env.JWT_SECRET || "your_secret_key";
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
};

// Create the User model
const DataModel = mongoose.models.User || mongoose.model('User', userSchema, "User");

module.exports = { DataModel };
