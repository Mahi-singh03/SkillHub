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







app.post("/Login", async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    // Find the user by phone number
    const user = await DataModel.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ error: "User not found. Please check the phone number." });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password. Please try again." });
    }

    // Generate a JWT token using the `generateToken` method from the model
    const token = user.generateToken();

    // Respond with success, token, and user information
    res.status(200).json({
      message: "Login successful",
      token,
      username: user.fullName || user.phoneNumber, // Use fullName if available, otherwise phoneNumber
    });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "An error occurred during login", details: err.message });
  }
});





app.listen(5000, () => {
  console.log('Server started on port 5000');
});
