const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: "localhost",
  port: process.env.port,
  user: "postgres",
  password: "gajah123",
  database: process.env.DB
});

client
  .connect()
  .then(() => console.log("connected"))
  .catch(err => console.log("failed", err.stack));

module.exports = client;
