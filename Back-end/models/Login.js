import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // `select: false` ensures password is not returned by default
});

// Hash password before saving
LoginSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password function
LoginSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Login = mongoose.model('Login', LoginSchema);
export default Login;
