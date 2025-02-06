const Blog = require("../models/Blog");

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new blog
exports.createBlog = async (req, res) => {
  const { title, content, image } = req.body;

  try {
    const newBlog = new Blog({ title, content, image });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, image } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, image },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
