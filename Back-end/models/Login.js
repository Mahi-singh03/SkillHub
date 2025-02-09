import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

// Check if model exists before defining
if (!mongoose.models.User) {
  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: 'Please enter a valid email'
      }
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false // Don't include password in queries by default
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  }, {
    timestamps: true // Adds createdAt and updatedAt fields
  });

  // Hash password before saving
  userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
      const salt = await bcrypt.genSalt(12);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });

  // Add method to compare passwords
  userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
      return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
      throw new Error(error);
    }
  };

  // Don't return password in JSON responses
  userSchema.set('toJSON', {
    transform: (doc, ret) => {
      delete ret.password;
      return ret;
    }
  });

  mongoose.model('User', userSchema);
}

export default mongoose.model('User');