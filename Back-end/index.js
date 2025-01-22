const express = require('express');
const { DataModel } = require('./Components/Users');
const connect = require('./Components/connection');
const { validations, validate } = require('./Components/validations');
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database once
(async () => {
  try {
    await connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    // Handle the error or exit the process
    process.exit(1);
  }
})();

// Registration Route
app.post("/Registration", validations, validate, async (req, res) => {
  const { fullName, fatherName, emailAddress, phoneNumber, selectedCourse, address, qualification, password } = req.body;

  try {
    // Create a new user object
    const newUser = new DataModel({
      fullName,
      fatherName,
      emailAddress,
      phoneNumber,
      selectedCourse,
      address,
      qualification,
      password,
    });

    // Save the user data to the database
    await newUser.save();

    // Generate a JWT token for the new user
    const token = newUser.generateToken();

    // Respond with success and token
    res.status(201).json({ message: "Registration successful", token, username: newUser.fullName });
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ error: "Error saving data", details: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
