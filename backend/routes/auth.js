// Required dependencies
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
// Use a default secret if environment variable is not set
const SECRET = process.env.JWT_SECRET || "default_secret";

// Register Route
router.post("/register", async (req, res) => {
  const { username, email, phoneNumber, password } = req.body;

  console.log("Register request received:", { username, email, phoneNumber, password });

  if (!username || !email || !phoneNumber || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const existingPhoneNumber = await User.findOne({ phoneNumber });
    if (existingPhoneNumber) {
      return res.status(400).json({ message: "Phone number already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, phoneNumber, password: hashedPassword });
    await newUser.save();

    console.log("New user registered:", newUser);
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "An error occurred while registering the user" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    console.log("User lookup result:", user);
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const tokenPayload = {
      id: user._id,
      username: user.username,
      role: user.role,
    };
    
    // Secret key for signing the token (should be stored securely)
    const SECRET = process.env.JWT_SECRET; 
    
    // Generate the JWT token
    const token = jwt.sign(tokenPayload, SECRET, {
      expiresIn: '24h',  // Token will expire in 24 hours
      algorithm: 'HS256',  // Signing algorithm
    });
    
    console.log("Generated Token:", token);

    res.status(200).json({ token, username });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});
// Middleware for verifying JWT\module.exports = (req, res, next) => {


  module.exports = function (req, res, next) {

    const token = req.header('auth-token');

    if (!token) return res.status(401).send('Access Denied !');
    console.log(process.env.JWT_SECRET);
    console.log(token);

    try 
    {
        
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;  
        next();

    } 
    catch (error) 
    {
        res.status(400).send('Invalid token !');
    }
}



module.exports = router;
