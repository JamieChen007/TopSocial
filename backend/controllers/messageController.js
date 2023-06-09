const axios = require("axios");

const getMessage = async function (req, res) {
  try {
    const url = "http://localhost:8000/message";
    const message = await axios.get(url);

    res.status(200).json({
      msg: "get message succeed",
      data: message.data,
    });
  } catch (error) {
    res.status(500).send("server error");
  }
};

module.exports = { getMessage };
