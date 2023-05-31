const express = require("express");
const highlineRouter = require("./highline");
const profileRouter = require("./profile");
const messageRouter = require("./message");
const requestRouter = require("./request");
const cardsRouter = require("./cards");

const router = express.Router();

router.use("/highline", highlineRouter);
router.use("/profile", profileRouter);
router.use("/message", messageRouter);
router.use("/request", requestRouter);
router.use("/cards", cardsRouter);

module.exports = router;
