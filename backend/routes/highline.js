const express = require("express");
const { getHighLine } = require("../controllers/highlineController");

const highlineRouter = express.Router();

//get highline
highlineRouter.get("/", getHighLine);

module.exports = highlineRouter;
