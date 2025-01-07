import express from "express";
const router = express.Router();
import Post from "../models/Post.js";
import User from "../models/User.js";

// Create a post
router.post("/", async (req, res) => {
  try {
    const post = await new Post(req.body);
    await post.save();
    res.status(200).json("Post created");
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal server error");
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.id === req.params.id) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post updated");
    } else {
      res.status(301).json("You can only update your post");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal server error");
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.id === req.params.id) {
      await post.deleteOne();
      res.status(200).json("Post deleted");
    } else {
      res.status(301).json("You can only delete your post");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal server error");
  }
});

// Like or dislike a post
router.put("/like/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(401).json("Post unavailable");
    }
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("Post liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("Post disliked");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal server error");
  }
});

// Get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal server error");
  }
});

// Get timeline posts
router.get("/timeline/posts", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: req.body.userId });
    const followingPost = await Promise.all(
      currentUser.following.map((followId) => {
        return Post.find({ userId: followId });
      })
    );
    const timelinePosts = [...userPosts, ...followingPost.flat()];
    console.log(timelinePosts);

    res.status(200).json("Success");
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal server error");
  }
});

export default router;
