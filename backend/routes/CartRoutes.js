const express = require("express");
const router = express.Router();

const {
    getCart,
    updateCart
} = require("../controllers/cartController");

router.route("/:userId").get(getCart);
router.route("/:userId").put(updateCart);

module.exports = router;