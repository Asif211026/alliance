const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Add a new user
router.post("/", async (req, res) => {
    console.log("Request Body:", req.body); // Log incoming data
    try {
      const { name, offering, need } = req.body;
      const user = await User.create({ name, offering, need });
      console.log("User Created:", user); // Log success
      res.status(201).json(user);
    } catch (error) {
      console.error("Error saving user:", error.message); // Log error
      res.status(500).json({ message: error.message });
    }
  });
  
  
  

// Get leaderboard (mock logic for relevance)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
