const mongoose = require("mongoose");

const listProductsSchema = new mongoose.Schema({
  product:{
    type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
  },
  quantity: {
    type: Number,
    default: 0
  }
})
const cartSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    products: {
      type: [listProductsSchema],
      default: [],
      required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);