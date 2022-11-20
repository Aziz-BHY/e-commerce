const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");


const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

const getMyProducts = asyncHandler(async (req, res) => {
    try {
      const products = await Product.find({user: req.params.userId});
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const getRelatedProduct = asyncHandler(async (req, res) => {
    try {
      const products = await Product.find({categorie: req.body.categorie}).limit(4);
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const addProduct = asyncHandler(async (req, res) => {
    try {
      const product = await Product.create(req.body);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body );
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json("deleted");
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