const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");


const getProducts = asyncHandler(async (req, res) => {
  try {
    const user = await Product.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

const getMyProducts = asyncHandler(async (req, res) => {
    try {
      const user = await Product.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const getRelatedProduct = asyncHandler(async (req, res) => {
    try {
      const user = await Product.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const addProduct = asyncHandler(async (req, res) => {
    try {
      const user = await Product.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const user = await Product.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const user = await Product.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});
module.exports = {
    getMyProducts,
    getProducts,
    getRelatedProduct,
    addProduct,
    updateProduct,
    deleteProduct
};