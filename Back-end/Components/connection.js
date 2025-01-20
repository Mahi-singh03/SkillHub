const mongoose = require('mongoose');

const connect = async () => {
  try {
    const uri = 'mongodb+srv://jasssood86:Jaswin@123@skillup.rm0bi.mongodb.net/?retryWrites=true&w=majority&appName=SkillUp';
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
