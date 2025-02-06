const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController.js");

// Public Route: Get all blogs
router.get("/", getAllBlogs);

// Protected Routes: Create, Update, Delete
router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;
