const { login, register, thisUser } = require("./controllers/auth");
const { auth } = require("./middleware/auth");
const { upload } = require("./middleware/upload");
const {
  myTicket,
  buyTicket,
  paymentProof,
  chooseTicket,
  allOrder,
  approvePayment
} = require("./controllers/order");
const { getTicket, addTicket, findOrderLike } = require("./controllers/ticket");
const { getType } = require("./controllers/type_id");

module.exports = function(app) {
  app.post("/api/login", login);
  app.post("/api/register", register);
  app.post("/api/buy", auth, buyTicket);
  app.get("/api/ticket", getTicket);
  app.get("/api/myTicket", auth, myTicket);
  app.get("/api/this_user", auth, thisUser);
  app.post("/api/ticket", auth, addTicket);
  app.get("/api/type", getType);
  app.post("/api/upload", upload.single("payment"), paymentProof);
  app.get("/api/myTicket/:id", auth, chooseTicket);
  app.get("/api/orders", allOrder);
  app.put("/api/order/:id", auth, approvePayment);
  app.get("/api/order", findOrderLike);
};
