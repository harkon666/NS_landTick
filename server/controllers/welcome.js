exports.welcome = (req, res) => {
  try {
    res.send({ message: "welcome to my-land-tick" });
  } catch (err) {
    console.log(err);
  }
};
