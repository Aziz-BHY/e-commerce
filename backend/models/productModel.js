const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 1
    },
    price: {
      type: Number,
      required: true
    },
    categorie: {
      type: String,
      required: true
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    image:{
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);