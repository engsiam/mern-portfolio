const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { JWT_SECRET } = process.env;

exports.protect = async (req, res, next) => {
  // Get token from header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check if user exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Token verification failed:", error); // Log the error
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};