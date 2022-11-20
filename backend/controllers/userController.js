const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");


const getUserInfo = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

const updateUser = asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const signin = asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const signup = asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});
module.exports = {
    getUserInfo,
    updateUser,
    signin,
    signup
};