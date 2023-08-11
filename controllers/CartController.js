const { UserCarts, Products } = require("../models");

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

  static async store(req, res) {
    const { productId, quantity } = req.body;

    if (!productId || !quantity || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ error: true, message: "productId and quantity not valid" });
    }

    const product = await Products.findByPk(productId);

    if (!product) {
      return res
        .status(404)
        .json({ error: true, message: "Product not found" });
    }

    const cart = await UserCarts.create({
      userId: req.user.id,
      amount: product.price * quantity,
      checkouted: false,
      productId: product.id,
      quantity,
    });

    return res
      .status(201)
      .json({ error: false, message: "Cart created", data: cart });
  }
}

module.exports = CartController;
