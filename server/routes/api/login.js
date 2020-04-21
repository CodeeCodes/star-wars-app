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

function authenticate(email, fn) {
  const user = User.findOne({ email: email }, function (err, user) {
    if (!user) return fn(new Error("cannot find user"));
  });
}
router.post("/", (req, res) => {
  //checking if email exists
  authenticate(req.body.email, function (err, user) {
    if (user) {
      return res.status(400).send(err);
    } else {
      return res.status(200).send("successful login");
    }
  });
});

module.exports = router;
