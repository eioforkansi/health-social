import express from "express";
import bcrypt from "bcrypt";
import User from "../modules/User.js";
const router = express.Router();

// Register user
router.post("/register", async (req, res) => {
  try {
    // Hash user password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    // Create new user
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: password,
    });
    // Save new user
    await user.save();
    res.status(200).json("User account created successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Some error occured!");
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(401).json("User not found");
    }

    const password = await bcrypt.compare(req.body.password, user.password);
    if (!password) {
      return res.status(401).json("Wrong password");
    }

    user && res.status(200).json("Login successful");
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Some error occured!");
  }
});

export default router;
