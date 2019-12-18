const express = require("express");
const router = express.Router();
const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
router.use(cors());
const app = express();
// const tokenSecret = "cbdhcbbdchbueycbiureicl";

const loginData = `${__dirname}` + "/model/loginSchema.js";
let User = require(loginData);

app.use(express.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  //checking if email exists
  const userExists = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (!userExists) {
    return res.status(400).send("Email or password doesn't exist");
  } else {
    return res.status(200).send("successful login");
  }
});

module.exports = router;
