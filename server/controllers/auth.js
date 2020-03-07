const models = require("../models");
const User = models.user;
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      if (user.password == password) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        res.send({ message: "success", token });
      } else {
        res.send({ message: "Wrong Password" });
      }
    } else {
      res.send({ message: "Wrong Email" });
    }
  } catch (err) {
    console.log(err);
    res.send({ message: "bgst" });
  }
};

exports.register = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      gender,
      phone,
      address
    } = req.body;
    const create = await User.create({
      name,
      username,
      email,
      password,
      gender,
      phone,
      address,
      isAdmin: false
    });
    const token = jwt.sign({ user_id: create.id }, process.env.SECRET_KEY);
    res.send({ message: "success", token, data: create });
  } catch (err) {
    console.log(err);
  }
};

exports.thisUser = async (req, res) => {
  try {
    const data = await User.findOne({ where: { id: req.user } });
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};
