const axios = require("axios");

const getCardById = async function (req, res) {
  const id = req.query.id;

  if (!id) {
    return res.status(400).send("id is required");
  }

  try {
    const url = "http://localhost:8000/cards?id=" + id;
    const card = await axios.get(url);

    res.status(200).json({
      msg: "get cards succeed",
      data: card.data,
    });
  } catch (error) {
    res.status(500).send("server error");
  }
};

const createCard = async function (req, res) {
  const newCard = req.body;

  if (Object.keys(newCard).length === 0) {
    return res.status(400).send("card is required");
  }

  try {
    const url = "http://localhost:8000/cards";
    await axios.post(url, newCard, {
      headers: { "Content-Type": "application/json" },
    });
    res.status(200).json({
      msg: "post cards succeed",
    });
  } catch (error) {
    res.status(500).send("server error");
  }
};

const deleteCardById = async function (req, res) {
  const id = req.params.card_id;

  try {
    const url = "http://localhost:8000/cards/" + id;
    await axios.delete(url);
    res.status(200).json({
      msg: "delete cards succeed",
    });
  } catch (error) {
    res.status(500).send("server error");
  }
};

module.exports = { getCardById, createCard, deleteCardById };
