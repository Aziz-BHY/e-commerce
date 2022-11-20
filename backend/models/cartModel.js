const mongoose = require("mongoose");

const listProductsSchema = new mongoose.Schema({
  product:{
    type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
  },
  quantity: {
    type: Number
  }
})
const cartSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    products: {
      type: [listProductsSchema],
      default: []
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);