const express = require("express");
const {
  getCardById,
  createCard,
  deleteCardById,
} = require("../controllers/cardsControllelr");
const cardsRouter = express.Router();

//get cards?id=1
cardsRouter.get("/", getCardById);

//post cards
cardsRouter.post("/", createCard);

//delete cards/:card_id
//delete card by id
// http://localhost/api/cards/:card_id
cardsRouter.delete("/:card_id", deleteCardById);

module.exports = cardsRouter;
