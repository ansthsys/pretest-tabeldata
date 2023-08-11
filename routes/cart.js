const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authenticate");
const CartController = require("../controllers/CartController");

router.get("/carts/", AuthMiddleware, CartController.index);
router.post("/carts/", AuthMiddleware, CartController.store);

module.exports = router;
