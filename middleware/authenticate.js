const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authorization = req.headers.authorization?.split(" ");

  if (!authorization || authorization[0] !== "Bearer" || !authorization[1]) {
    return res.status(400).json({
      success: false,
      message: "Access token is missing",
    });
  }

  jwt.verify(authorization[1], process.env.JWT_KEY, async (err, data) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Access token expired" });
    }

    req.user = data.user;
    req.token = { ...authorization };
    next();
  });
};

module.exports = auth;
