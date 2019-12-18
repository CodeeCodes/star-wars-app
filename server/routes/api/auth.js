const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const app = express();

const authData = `${__dirname}` + "/model/authSchema.js";
let User = require(authData);

app.use(express.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    newUser.save().then(user => res.json({ msg: "User successfully created" }));
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
