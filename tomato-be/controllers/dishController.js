const Dish = require("../models/Dish");
const Restaurant = require("../models/Restaurant");

exports.createDish = async (req, res) => {
  const { name, rating, price, restaurantId } = req.body;

  try {
    // Validate restaurant existence
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res
        .status(400)
        .json({ success: false, message: "Restaurant not found" });
    }

    // Create dish
    const dish = await Dish.create({
      name,
      rating,
      price,
      restaurant: restaurantId,
    });

    // Directly update the Restaurant's dishes array
    await Restaurant.updateOne(
      { _id: restaurantId },
      { $push: { dishes: dish._id } }
    );

    res.status(201).json({
      success: true,
      data: dish,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
