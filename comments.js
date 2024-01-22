// Create web server
// 1. Create a web server
// 2. Create a route handler for getting all comments
// 3. Create a route handler for creating a comment
// 4. Create a route handler for getting a single comment
// 5. Create a route handler for updating a comment
// 6. Create a route handler for deleting a comment
// 7. Create a route handler for deleting all comments

const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// 2. Create a route handler for getting all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

// 3. Create a route handler for creating a comment
router.post("/", async (req, res) => {
  const comment = new Comment({