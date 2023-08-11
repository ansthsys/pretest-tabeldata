const { UserCarts } = require("../models");

class CartController {
  static async index(req, res) {
    const carts = await UserCarts.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });

    return res
      .status(200)
      .json({ error: false, message: "Get all carts", data: carts });
  }
}

module.exports = CartController;
