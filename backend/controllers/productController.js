const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");
const jwt = require("jsonwebtoken");


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
      let payload = jwt.verify(req.query.token, "secret")
      const products = await Product.find({user: payload.userId});
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const getProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
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
      let payload = jwt.verify(req.body.token, "secret")
      const product = await Product.create({...req.body, user: payload.userId, image: req.file.filename});
      console.log(product)
      return res.status(200).json(product);
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        error: error,
      });
    }
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    let body = {}
    if(req.file){
      body.image = req.file.filename
    }
    const product = await Product.findByIdAndUpdate(req.params.id, {...req.body, ...body}, {new: true});
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
    getProduct,
    deleteProduct
};