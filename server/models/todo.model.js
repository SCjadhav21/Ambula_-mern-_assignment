const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  car_name: { type: String, required: true },
  car_image: { type: String, required: true, unique: true },
  colors_avl: { type: String, required: true },
  car_price: { type: Number, required: true },
  car_mileage: { type: Number, required: true },
  car_desc: {
    model: String,
    yearOfManufacturer: String,
    power: Number,
    max_speed: Number,
    priceOfNew: Number,
  },
});

const CarModel = mongoose.model("car", carSchema);

module.exports = { CarModel };
