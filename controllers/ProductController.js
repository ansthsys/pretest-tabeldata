const { Products } = require("../models");

class ProductController {
  static async index(req, res) {
    const product = await Products.findAll({
      order: [["name", "ASC"]],
    });

    return res
      .status(200)
      .json({ error: false, message: "Get all product", data: product });
  }

  static async show(req, res) {
    const productId = req.params.productId;
    const product = await Products.findByPk(productId);

    if (!product) {
      return res
        .status(404)
        .json({ error: true, message: "Product not found" });
    }

    return res
      .status(200)
      .json({ error: false, message: "Get single product", data: product });
  }
}

module.exports = ProductController;
