const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    adress: {
      type: String,
      required: true
    },
    town: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function(val) {
            return val.length == 8
        },
        message: () => `Please insert a valid phone number`
    },
    },
    email: {
      type: String,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function(val) {
            return val.length >= 8
        },
        message: () => `Password must be at least 8 characters long`
    },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);