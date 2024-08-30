const Restaurant = require("../models/Restaurant");
const logger = require("../utils/logger");

exports.getRestaurants = async (req, res) => {
  try {
    const { page = 1, limit = 10, location, price, type } = req.query;

    // Build query object
    let query = {};

    if (location) {
      query.location = { $regex: location, $options: "i" }; // case-insensitive
    }

    if (type) {
      query.type = { $regex: type, $options: "i" };
    }

    // Note: Price filtering might be based on dishes' prices, which requires aggregation.
    // For simplicity, assuming price refers to restaurant's average dish price.
    // You might need to adjust based on actual requirements.

    // Pagination
    const skip = (page - 1) * limit;

    const restaurants = await Restaurant.find(query)
      .populate("dishes")
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .exec();

    const total = await Restaurant.countDocuments(query);

    logger.info(`Total restaurants count: ${total}`);
    res.status(200).json({
      success: true,
      count: restaurants.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      data: restaurants,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.createRestaurant = async (req, res) => {
  const { name, type, address } = req.body;

  try {
    // Create dish
    const restaurant = await Restaurant.create({
      name,
      type,
      address,
    });

    res.status(201).json({
      success: true,
      data: restaurant,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
