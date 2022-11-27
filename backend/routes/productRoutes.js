const express = require("express");
const router = express.Router();
const multer = require("multer");
const crypto = require("crypto")
//setting options for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./images");
      },
    filename: function (req, file, cb) {
        console.log(file.filename)
      cb(null, crypto.randomUUID()+".png");
    },
  });
const upload = multer({ storage: storage }).single("file");
const {
    addProduct,
    deleteProduct,
    getMyProducts,
    getProducts,
    getRelatedProduct,
    getProduct,
    updateProduct
} = require("../controllers/productController");

router.post("/" , upload, addProduct)
router.route("/:id").delete(deleteProduct);
router.route("/").get(getProducts);
router.route("/related/:categorie").get(getRelatedProduct);
router.route("/me").get(getMyProducts);
router.route("/:id").get(getProduct);
router.put("/:id", upload, updateProduct)

module.exports = router;