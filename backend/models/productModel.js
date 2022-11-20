const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
    categorie: {
      type: String,
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);