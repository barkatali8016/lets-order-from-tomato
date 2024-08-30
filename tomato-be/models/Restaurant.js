const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a restaurant name"],
    },
    type: {
      type: String,
      required: [true, "Please add a type of restaurant"],
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    dishes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dish",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
