const asyncHandler = require("express-async-handler");

const Cart = require("../models/cartModel");
const jwt = require("jsonwebtoken");
const axios = require("axios")

const updateCart = asyncHandler(async (req, res) => {
  try {
    let payload = jwt.verify(req.params.token, "secret")
    const cart = await Cart.findOneAndUpdate({user: payload.userId}, {products: req.body}, {new: true});
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

const addToCart = asyncHandler(async (req, res) => {
  try {
    let payload = jwt.verify(req.params.token, "secret")
    const cart = await Cart.findOne({user: payload.userId});
    let added = false;
    for(let product of cart.products){
      if(product.product+"" == req.body.product+""){
        product.quantity += Number.parseInt(req.body.quantity) 
        added = true
        break;
      }
    }
    if(!added){
      cart.products = [...cart.products, {product: req.body.product, quantity: req.body.quantity}]
    }
    await cart.save();
    return res.status(200).json("cart updated");
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

const getCart = asyncHandler(async (req, res) => {
    try {
      let payload = jwt.verify(req.params.token, "secret")
      Cart.findOne({user: payload.userId}).populate("products.product").exec((err, cart)=>{
        if(err)
        return res.status(500).json({
          error: err,
        });
        cart.products = cart.products.filter((prod, index)=> prod.product != null)
        return res.status(200).json(cart);
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const payment = asyncHandler(async (req, res) => {
  try {
    let payload = jwt.verify(req.params.token, "secret")
    axios.get(`https://sandbox.paymee.tn/api/v1/payments/${req.body.token}/check`,{
      headers: {
        'Authorization': 'Token 6959e271e6ace674ee06e8790ee8d059abb5076c'
      }
    }).then(async paymee=>{
      if(paymee.data.message == "Success"){
        await Cart.findOneAndUpdate({user: payload.userId}, {products: []}, {new: true});
        res.json({message: "Sucess"})
      }
    })
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

module.exports = {
    updateCart,
    getCart,
    payment,
    addToCart
};