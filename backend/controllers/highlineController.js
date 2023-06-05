const axios = require("axios");

const getHighLine = async function (req, res) {
  try {
    const url = "http://localhost:8000/highline";
    const highline = await axios.get(url);

    res.status(200).json({
      msg: "get highline succeed",
      data: highline.data,
    });
  } catch (error) {
    res.status(500).send("server error");
  }
};

module.exports = { getHighLine };
