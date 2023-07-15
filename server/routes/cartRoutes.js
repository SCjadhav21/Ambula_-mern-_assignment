const express = require("express");
const { CartModel } = require("../models/cart.model");

const CartRoutes = express.Router();

// get all cart items
CartRoutes.get("/", async (req, res) => {
  try {
    const cart = await CartModel.find();
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send(e.message);
  }
});

// Add item to cart
CartRoutes.post("/addcart", async (req, res) => {
  let cartItem = req.body;
  try {
    const newcartItem = await new CartModel(cartItem);
    newcartItem.save();
    res
      .status(201)
      .send({ massage: "product added", alert: "cartItem added successfully" });
  } catch (err) {
    res.status(500).send(e.message);
  }
});

// delete the cartItem
CartRoutes.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await CartModel.findOneAndDelete({ _id: id });
    res
      .status(200)
      .send({ massage: "deleted", alert: "cartItem deleted successfully" });
  } catch (err) {
    res.status(500).send(e.message);
  }
});
module.exports = { CartRoutes };
