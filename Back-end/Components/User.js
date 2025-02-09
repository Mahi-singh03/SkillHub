import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
    trim: true
  },
  rollNo: {
    type: String,
    unique: true
  },
  emailAddress: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of Birth is required']
  },
  selectedCourse: {
    type: String,
    required: [true, 'Course selection is required'],
    enum: ['HTML, CSS, JS', 'React', 'MERN FullStack', 'Autocad', 'CorelDRAW', 'Tally', 'Premier Pro', 'Wordpress', 'Computer Course', 'MS Office', 'PTE']
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  qualification: {
    type: String,
    required: [true, 'Qualification is required'],
    enum: ['10th', '12th', 'Graduated']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Auto-generate Roll Number before saving
userSchema.pre('save', async function(next) {
  if (this.rollNo) return next(); // Skip if rollNo already exists

  const currentYear = new Date().getFullYear();
  
  // Find the last student to get the last roll number
  const lastUser = await mongoose.model('User').findOne().sort({ rollNo: -1 });

  let newRollNo;
  if (lastUser && lastUser.rollNo.startsWith(currentYear.toString())) {
    // Bug: Converting rollNo directly to integer could lose leading zeros
    newRollNo = parseInt(lastUser.rollNo) + 1;
  } else {
    newRollNo = `${currentYear}001`; // Start fresh if no roll numbers exist
  }

  this.rollNo = newRollNo;
  next();
});

// Remove sensitive fields from response
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  delete user.__v;
  user.id = user._id;
  delete user._id;
  return user;
};

export default mongoose.model('User', userSchema);
