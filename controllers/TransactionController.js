const { randomBytes } = require("crypto");
const { Op } = require("sequelize");
const { UserCarts, UserTransactions } = require("../models");

class TransactionController {
  static async checkout(req, res) {
    const { cartsId } = req.body;

    if (!cartsId || !Array.isArray(cartsId) || cartsId.length === 0) {
      return res
        .status(400)
        .json({ error: true, message: "cartsId is required" });
    }

    const carts = await UserCarts.findAll({ where: { id: cartsId } });
    const invoiceId = `INV-${randomBytes(10).toString("hex").toUpperCase()}`;
    const totalAmount = carts.reduce(
      (acc, cart) => acc + Number(cart.amount),
      0
    );

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

    return res.status(200).json({
      error: false,
      message: "Success checkout",
      data: invoice,
    });
  }
}

module.exports = TransactionController;
