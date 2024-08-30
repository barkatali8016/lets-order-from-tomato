const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a dish name"],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    price: {
      type: Number,
      required: [true, "Please add a price for the dish"],
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dish", DishSchema);
