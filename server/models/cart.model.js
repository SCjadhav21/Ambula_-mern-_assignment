const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  title: { type: String, required: true },

  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: URL, required: true },
  price: { type: Number, required: true },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
