const express = require("express");
const {
  getCards,
  getCardById,
  createCard,
  deleteCardById,
} = require("../controllers/cardsControllelr");
const cardsRouter = express.Router();

//get cards
cardsRouter.get("/", getCards);

//get cards?id=1
cardsRouter.get("/:card_id", getCardById);

//post cards
cardsRouter.post("/", createCard);

//delete cards/:card_id
//delete card by id
// http://localhost/api/cards/:card_id
cardsRouter.delete("/:card_id", deleteCardById);

module.exports = cardsRouter;
