import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import User from "../models/User.js";

// Update a user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal server error Password");
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      if (!user) {
        return res.status(301).json("User unavailable");
      }

      res.status(200).json("User updated");
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Internal server error");
    }
  } else {
    return res.status(403).json("You can only update your account");
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      if (!user) {
        return res.status(301).json("User unavailable");
      }

      res.status(200).json("User deleted");
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Internal server error");
    }
  } else {
    return res.status(403).json("You can only delete your account");
  }
});

// Get a user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(301).json("User unavailable");
    }

    const { password, updatedAt, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal server error");
  }
});

// Follow a user
router.put("/follow/:id", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json("User followed");
      } else {
        res.status(403).json("You already follow this user");
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Internal server error");
    }
  } else {
    return res.status(403).json("You cannot follow your account");
  }
});

// Unfollow a user
router.put("/unfollow/:id", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json("User unfollowed");
      } else {
        res.status(403).json("You are not following this user");
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Internal server error");
    }
  } else {
    return res.status(403).json("You cannot unfollow your account");
  }
});

export default router;
