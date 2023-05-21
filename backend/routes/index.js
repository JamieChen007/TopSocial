const axios = require("axios");
const express = require("express");

const router = express.Router();

//get profile
router.get("/profile", async function (req, res) {
  try {
    const url = "http://localhost:8000/profile";
    const profile = await axios.get(url);

    res.status(200).json({
      msg: "get profile succeed",
      data: profile.data,
    });
  } catch (error) {
    res.status(500).send("server error");
  }
});

//get highline
router.get("/highline", async function (req, res) {
  try {
    const url = "http://localhost:8000/highline";
    const highline = await axios.get(url);

    res.status(200).json({
      msg: "get highline succeed",
      data: {
        highline: highline.data,
      },
    });
  } catch (error) {
    res.status(500).send("server error");
  }
});

//get message
router.get("/message", async function (req, res) {
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
});

//get request
router.get("/request", async function (req, res) {
  try {
    const url = "http://localhost:8000/request";
    const request = await axios.get(url);

    res.status(200).json({
      msg: "get request succeed",
      data: request.data,
    });
  } catch (error) {
    res.status(500).send("server error");
  }
});

//get cards?id=1
// router.get("/cards", async function (req, res) {
//   try {
//     const url = "http://localhost:8000/cards";
//     const cards = await axios.get(url);

//     res.status(200).json({
//       msg: "get cards succeed",
//       data: cards.data,
//     });
//   } catch (error) {
//     res.status(500).send("server error");
//   }
// });

//post cards
// router.post("/cards", async function (req, res) {
//   try {
//     const url = "http://localhost:8000/cards";
//     const cards = await axios.post(url);

//     res.status(200).json({
//       msg: "get cards succeed",
//       data: cards.data,
//     });
//   } catch (error) {
//     res.status(500).send("server error");
//   }
// });

//delete cards/:card_id
//delete card by id
// http://localhost/api/cards/:card_id

module.exports = router;
