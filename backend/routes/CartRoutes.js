const express = require("express");
const router = express.Router();

const {
    getCart,
    updateCart,
    addToCart,
    payment
} = require("../controllers/cartController");

router.route("/:token").get(getCart);
router.route("/add/:token").put(addToCart);
router.route("/pay/:token").post(payment);
router.route("/:token").put(updateCart);

module.exports = router;