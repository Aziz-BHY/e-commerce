const asyncHandler = require("express-async-handler");



const getImage = asyncHandler(async (req, res) => {
  res.sendFile(req.params.image, { root: "./images" })
});


module.exports = {
  getImage
};