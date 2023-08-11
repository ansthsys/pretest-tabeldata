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
}

module.exports = ProductController;
