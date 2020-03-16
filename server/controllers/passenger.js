const models = require("../models");
const Passenger = models.passengers;

exports.createPassenger = async (req, res) => {
  try {
    const { load, id } = req.body;
    let data = [];
    for (let prop in load) {
      const temp = {
        dewasa: load[prop].name,
        tanda_pengenal: load[prop].identity,
        user_id: req.user,
        ticket_id: id
      };
      data.push(temp);
    }
    console.log(data, "woi cuks");
    const show = await Passenger.bulkCreate(data);
    res.send({ message: "success", data: show });
  } catch (err) {
    console.log(err);
    res.send({ message: err });
  }
};
