const models = require("../models");
const Ticket = models.ticket;
const Type = models.type;
const Station = models.station;
const { Op } = require("sequelize");

exports.getTicket = async (req, res) => {
  try {
    const date = () => {
      let d = new Date();
      return `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;
    };
    console.log(date());
    const data = await Ticket.findAll({
      where: { dateStart: date() },
      include: [
        {
          model: Type,
          attributes: {
            exclude: ["updatedAt", "createdAt"]
          }
        },
        {
          model: Station,
          as: "start",
          attributes: {
            exclude: ["updatedAt", "createdAt"]
          }
        },
        {
          model: Station,
          as: "end",
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
      startTime,
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
      startTime,
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
    const dateStart = req.query.date;
    const tanggal = new Date();
    const data = await Ticket.findAll({
      where: {
        dateStart: dateStart
          ? dateStart
          : `${tanggal.getFullYear()}-0${tanggal.getMonth() +
              1}-${tanggal.getDate()}`
      },
      include: [
        {
          model: Type,
          attributes: {
            exclude: ["updatedAt", "createdAt"]
          }
        },
        {
          model: Station,
          as: "start",
          where: {
            station: {
              [Op.iLike]: `%${start}%`
            }
          },
          attributes: {
            exclude: ["updatedAt", "createdAt"]
          }
        },
        {
          model: Station,
          as: "end",
          where: {
            station: {
              [Op.iLike]: `%${end}%`
            }
          },
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
