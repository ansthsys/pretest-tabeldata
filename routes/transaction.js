const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authenticate");
const TransactionController = require("../controllers/TransactionController");

router.get("/transactions/", AuthMiddleware, TransactionController.index);
router.post("/transactions/", AuthMiddleware, TransactionController.checkout);
router.put("/transactions/:transactionId", AuthMiddleware, TransactionController.payment);

module.exports = router;
