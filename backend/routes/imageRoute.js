const express = require("express");
const router = express.Router();

const {
    getImage
} = require("../controllers/imageController");


router.route("/:image").get(getImage);

module.exports = router;