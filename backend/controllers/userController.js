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
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const signin = asyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({email: req.body.email, password: req.body.password});
      if(user){
        let token = jwt.sign({userId: user._id}, "secret")
        return res.status(200).json({token});
      }
      else return res.status(200).json({error: "email or password is incorrect"});
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
});

const signup = asyncHandler(async (req, res) => {
    try {
      let user = await User.findOne({email: req.body.email});
      if(user){
        return res.json({error:"user already exist"})
      }else{
        user = await User.create(req.body);
        let token = jwt.sign({userId: user._id}, "secret")
      return res.status(200).json({token}); 
      }
      
    } catch (error) {
      console.log(error)
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