const models = require("../models");
const Type = models.type;

exports.getType = async (req, res) => {
  try {
    const data = await Type.findAll({});
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};
