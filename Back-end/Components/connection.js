const mongoose = require('mongoose');

const connect = async () => {
  try {
    const uri = 'mongodb+srv://Admin:Jaswin123@registration.ioq6e.mongodb.net/?retryWrites=true&w=majority&appName=Registration';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to the database');
  } catch (err) {
    console.error('Database connection error:', err.message);
  }
};

module.exports = connect; 