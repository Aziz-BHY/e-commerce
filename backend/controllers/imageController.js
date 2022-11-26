const asyncHandler = require("express-async-handler");



const getImage = asyncHandler(async (req, res) => {
  console.log(req.params)
  res.sendFile(req.params.image, { root: "./images" })
});


module.exports = {
  getImage
};