const models = require("../models");
const Ticket = models.ticket;
const Type = models.type;
const { Op } = require("sequelize");

exports.getTicket = async (req, res) => {
  try {
    const data = await Ticket.findAll({
      include: [
        {
          model: Type,
          attributes: {
            exclude: ["updatedAt", "createdAt"]
          }
        }
      ]
    });
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "error" });
  }
};

exports.addTicket = async (req, res) => {
  try {
    const {
      nameTrain,
      type_id,
      dateStart,
      startStation,
      startTimer,
      destinationStation,
      arrivalTime,
      price,
      qty
    } = req.body;
    const data = await Ticket.create({
      nameTrain,
      type_id,
      dateStart,
      startStation,
      startTimer,
      destinationStation,
      arrivalTime,
      price,
      qty
    });
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.findOrderLike = async (req, res) => {
  try {
    const start = req.query.start_station;
    const end = req.query.end_station;
    const data = await Ticket.findAll({
      where: {
        startStation: {
          [Op.iLike]: `%${start}%`
        },
        destinationStation: { [Op.iLike]: `%${end}%` }
      },
      include: [
        {
          model: Type,
          attributes: {
            exclude: ["updatedAt", "createdAt"]
          }
        }
      ]
    });
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};
