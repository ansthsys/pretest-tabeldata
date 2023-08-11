const { randomBytes } = require("crypto");
const { Op } = require("sequelize");
const { Users, UserCarts, UserTransactions } = require("../models");

class TransactionController {
  static async index(req, res) {
    const transactions = await UserTransactions.findAll({
      where: { userId: req.user.id },
    });

    return res.status(200).json({
      error: false,
      message: "Success get transactions",
      data: transactions,
    });
  }

  static async checkout(req, res) {
    const { cartsId } = req.body;

    if (!cartsId || !Array.isArray(cartsId) || cartsId.length === 0) {
      return res
        .status(400)
        .json({ error: true, message: "cartsId is required" });
    }

    const carts = await UserCarts.findAll({
      where: { id: cartsId, checkouted: false },
    });
    const invoiceId = `INV-${randomBytes(10).toString("hex").toUpperCase()}`;
    const totalAmount = carts.reduce(
      (acc, cart) => acc + Number(cart.amount),
      0
    );

    if (carts.length === 0) {
      return res
        .status(404)
        .json({ error: true, message: "Cart not found or already checkout" });
    }

    const invoice = await UserTransactions.create({
      userId: req.user.id,
      invoiceId,
      orderDate: new Date(),
      cartsId: JSON.stringify(carts.map((cart) => cart.id)),
      totalAmount,
      status: "unpaid",
    });

    if (invoice) {
      await UserCarts.update(
        { checkouted: true },
        { where: { id: { [Op.in]: cartsId } } }
      );
    }

    return res.status(201).json({
      error: false,
      message: "Success checkout",
      data: invoice,
    });
  }

  static async payment(req, res) {
    const transactionId = req.params.transactionId;

    if (!transactionId || isNaN(transactionId)) {
      return res
        .status(400)
        .json({ error: true, message: "transactionId is required" });
    }

    const transaction = await UserTransactions.findOne({
      where: { id: transactionId, userId: req.user.id },
    });

    if (!transaction) {
      return res
        .status(404)
        .json({ error: true, message: "Transaction not found" });
    }

    if (transaction.status !== "unpaid") {
      return res
        .status(400)
        .json({ error: true, message: "Transaction already paid" });
    }

    const updatedTransaction = await transaction.update({
      status: "paid",
      updatedAt: new Date(),
    });

    return res.status(200).json({
      error: false,
      message: "Payment successfully",
      data: updatedTransaction,
    });
  }
}

module.exports = TransactionController;
