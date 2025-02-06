const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/blogs", require("./routes/blog")); // Blog Routes
app.use("/api/team", require("./routes/team")); // Team Routes
app.use("/api/services", require("./routes/service")); // Service Routes

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
