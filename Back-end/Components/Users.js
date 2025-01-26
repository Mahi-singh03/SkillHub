const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  fatherName: { type: String, required: true, trim: true },
  emailAddress: { type: String, required: true, unique: true, match: [/\S+@\S+\.\S+/, 'Please use a valid email address'] },
  phoneNumber: { type: String, required: true, match: [/^\d{10}$/, 'Phone number must be 10 digits'] },
  selectedCourse: { type: String, required: true },
  address: { type: String, required: true },
  qualification: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
});

// Hash password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to check if the entered password is valid
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate a JWT token
userSchema.methods.generateToken = function () {
  const payload = { id: this._id, email: this.emailAddress, name: this.fullName };
  const secretKey = process.env.JWT_SECRET || 'default_secret';
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
};

// Create the User model
const DataModel = mongoose.models.User || mongoose.model('registration', userSchema, 'registration');

module.exports = { DataModel };
