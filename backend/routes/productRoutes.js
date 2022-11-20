const express = require("express");
const router = express.Router();

const {
    addProduct,
    deleteProduct,
    getMyProducts,
    getProducts,
    getRelatedProduct,
    updateProduct
} = require("../controllers/productController");

router.route("/").post(addProduct);
router.route("/:id").delete(deleteProduct);
router.route("/:userId").get(getMyProducts);
router.route("/").get(getProducts);
router.route("/related").get(getRelatedProduct);
router.route("/:id").put(updateProduct);

module.exports = router;