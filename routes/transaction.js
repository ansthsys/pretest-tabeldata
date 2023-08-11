const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authenticate");
const TransactionController = require("../controllers/TransactionController");

router.post("/checkout", AuthMiddleware, TransactionController.checkout);

module.exports = router;
