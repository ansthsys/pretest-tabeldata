require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require("../models");

class CartController {
  static async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "Email and password is required" });
    }

    const user = await Users.findOne({
      where: { email: email },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res
        .status(401)
        .json({ error: true, message: "Account not found" });
    }

    const token = jwt.sign(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      process.env.JWT_KEY,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      error: false,
      message: "Success login",
      data: { type: "Bearer", token },
    });
  }

  static async register(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "Name, email and password is required" });
    }

    const [user, created] = await Users.findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
        password,
        isAdmin: false,
      },
    });

    if (!created) {
      return res
        .status(400)
        .json({ error: true, message: "Email already registered" });
    }

    return res
      .status(201)
      .json({
        error: false,
        message: "Success register",
        data: { id: user.id, name: user.name, email: user.email },
      });
  }
}

module.exports = CartController;
