const express = require("express");
const cors = require("cors");
const router = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

const port = 80;

app.listen(port, function () {
  console.log("server is running on http://localhost:80");
});
