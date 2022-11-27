const express = require("express");
const router = express.Router();

const {
    getCart,
    updateCart,
    addToCart
} = require("../controllers/cartController");

router.route("/:token").get(getCart);
router.route("/add/:token").put(addToCart);
router.route("/:token").put(updateCart);

module.exports = router;