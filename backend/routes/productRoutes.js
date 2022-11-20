const express = require("express");
const router = express.Router();
const multer = require("multer");

//setting options for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("file");
const {
    addProduct,
    deleteProduct,
    getMyProducts,
    getProducts,
    getRelatedProduct,
    updateProduct
} = require("../controllers/productController");

router.post("/" , upload, addProduct)
router.route("/:id").delete(deleteProduct);
router.route("/:userId").get(getMyProducts);
router.route("/").get(getProducts);
router.route("/related").get(getRelatedProduct);
router.route("/:id", upload , updateProduct).put(updateProduct);

module.exports = router;