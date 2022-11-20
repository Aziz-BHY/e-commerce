const asyncHandler = require("express-async-handler");

const Cart = require("../models/cartModel");


const updateCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate({user: req.params.userId}, req.body);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

const getCart = asyncHandler(async (req, res) => {
    try {
      const user = await Cart.findOne({user: req.params.userId});
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

module.exports = {
    updateCart,
    getCart
};