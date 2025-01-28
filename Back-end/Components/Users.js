import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  fatherName: { type: String, required: true, trim: true },
  emailAddress: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
  },
  phoneNumber: { 
    type: String, 
    required: true, 
    match: [/^\d{10}$/, 'Phone number must be 10 digits'],
  },
  selectedCourse: { type: String, required: true },
  address: { type: String, required: true },
  qualification: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
});

// Hash the user's password before saving it to the database
userSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

// Method to compare password for login
userSchema.methods.comparePassword = async function(password) {
  return await bcryptjs.compare(password, this.password);
};

// Method to generate JWT token
userSchema.methods.generateAuthToken = function() {
  const payload = { id: this._id, email: this.emailAddress };
  const secretKey = process.env.JWT_SECRET_KEY || 'yourSecretKey';
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
};

// Create the User model
const DataModel = mongoose.models.User || mongoose.model('registration', userSchema, 'registration');

// Export the model
export default DataModel;