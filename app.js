const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const app = express();
const port = process.env.PORT || 3000;
const forms = multer();

app.use(forms.array());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(authRouter);
app.use(productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
