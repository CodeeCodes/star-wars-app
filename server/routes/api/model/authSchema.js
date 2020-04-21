const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid/v4");

//create Schema

const AuthSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    default: uuid,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = Auth = mongoose.model("auth", AuthSchema);
