/**
 * @fileoverview Express router for handling comment API endpoints.
 * Provides endpoints for retrieving and deleting comments from the database.
 */

/**
 * GET / - Retrieves all comments from the database
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON array of all comments or error message
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * DELETE /:id - Deletes a comment by its ID
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The ID of the comment to delete
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON success message or error message
 * @throws {Error} Returns 500 status with error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

//add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const commentId = req.params.id;
        await Comment.findByIdAndDelete(commentId);
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});
