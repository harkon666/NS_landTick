const models = require("../models");
const Order = models.order;
const Ticket = models.ticket;
const User = models.user;
const Type = models.type;
const Station = models.station;

exports.myTicket = async (req, res) => {
  try {
    const data = await Order.findAll({
      where: { user_id: req.user },
      include: [
        {
          model: Ticket,
          include: [
            {
              model: Type,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: Station,
              as: "start",
              attributes: {
                exlude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: Station,
              as: "end",
              attributes: {
                exlude: ["createdAt", "updatedAt"]
              }
            }
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        },
        {
          model: User,
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        }
      ],
      order: [["id", "desc"]]
    });
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.buyTicket = async (req, res) => {
  try {
    const { ticket_id, qty, totalPrice } = req.body;
    const user_id = req.user;
    const status = "pending";
    const data = await Order.create({
      ticket_id,
      user_id,
      qty,
      totalPrice,
      status
    });
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.paymentProof = async (req, res) => {
  try {
    const { filename } = req.file;
    const { id } = req.body;
    console.log(id, "gilaaaa");
    if (!filename) {
      res.status(400).json({
        status: "failed",
        code: "400",
        message: "Please upload file"
      });
    } else {
      await Order.update(
        {
          attachment: filename,
          paid: true
        },
        { where: { id } }
      );

      res.status(200).json({
        status: "success",
        code: "200",
        message: "file uploaded successfully",
        data: filename
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.chooseTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Order.findOne({
      where: { id },
      include: [
        {
          model: Ticket,
          include: [
            {
              model: Type,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: Station,
              as: "start",
              attributes: {
                exlude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: Station,
              as: "end",
              attributes: {
                exlude: ["createdAt", "updatedAt"]
              }
            }
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        },
        {
          model: User,
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        }
      ]
    });
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.allOrder = async (req, res) => {
  try {
    const data = await Order.findAll({
      include: [
        {
          model: Ticket,
          include: [
            {
              model: Type,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: Station,
              as: "start",
              attributes: {
                exlude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: Station,
              as: "end",
              attributes: {
                exlude: ["createdAt", "updatedAt"]
              }
            }
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        },
        {
          model: User,
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        }
      ],
      order: [["id", "desc"]]
    });
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.approvePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Order.update(
      {
        status
      },
      {
        where: { id }
      }
    );
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};
