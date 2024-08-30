const express = require("express");
const router = express.Router();
const {
  getRestaurants,
  createRestaurant,
} = require("../controllers/restaurantController");
const { protect } = require("../middleware/auth");

// @route   GET /api/restaurants
// @desc    Get all restaurants with pagination and filters
// @access  Public
router.get("/", protect, getRestaurants);
router.post("/", protect, createRestaurant);

module.exports = router;
