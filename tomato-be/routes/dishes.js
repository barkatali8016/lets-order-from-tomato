const express = require("express");
const router = express.Router();
const { createDish } = require("../controllers/dishController");
const { protect } = require("../middleware/auth");
const { authorize } = require("../middleware/role");

// @route   POST /api/dishes
// @desc    Create a new dish
// @access  Private (Admin)
router.post("/", protect, authorize("admin"), createDish);

module.exports = router;
