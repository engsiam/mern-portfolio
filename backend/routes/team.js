const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  getAllTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} = require("../controllers/teamController.js");

// Public Route: Get all team members
router.get("/", getAllTeamMembers);

// Protected Routes: Create, Update, Delete
router.post("/", protect, createTeamMember);
router.put("/:id", protect, updateTeamMember);
router.delete("/:id", protect, deleteTeamMember);

module.exports = router;
