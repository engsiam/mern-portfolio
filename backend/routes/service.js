const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  getAllServices,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController.js");

// Public Route: Get all services
router.get("/", getAllServices);

// Protected Routes: Create, Update, Delete
router.post("/", protect, createService);
router.put("/:id", protect, updateService);
router.delete("/:id", protect, deleteService);

module.exports = router;
