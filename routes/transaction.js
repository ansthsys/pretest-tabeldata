const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authenticate");
const TransactionController = require("../controllers/TransactionController");

router.post("/transactions/", AuthMiddleware, TransactionController.checkout);
router.put("/transactions/:transactionId", AuthMiddleware, TransactionController.payment);

module.exports = router;
