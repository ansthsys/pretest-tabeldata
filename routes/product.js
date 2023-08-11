const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/products/", ProductController.index);
router.get("/products/search/", ProductController.search);
router.get("/products/:productId", ProductController.show);

module.exports = router;
