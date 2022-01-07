const express = require("express");
const Product = require("../model/Product");
const router = express.Router();
const productController = require("../controllers/product_controller");

router.get("/", productController.getProducts);
router.post("/", productController.addProducts);
router.get("/:id", productController.getProductById);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;