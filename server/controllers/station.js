const models = require("../models");
const Station = models.station;

exports.getStation = async (req, res) => {
  try {
    const data = await Station.findAll({});
    res.send({ message: "success", data });
  } catch (err) {
    res.send({ message: err });
  }
};
