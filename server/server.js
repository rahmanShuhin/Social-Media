const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
require("dotenv").config();
//import router
const reg = require("./Router/Auth");
const post = require("./Router/Post");

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database is connected");
  }
);

app.use(express.json());

app.use("/auth", reg);
app.use("/post", post);

app.listen(5000, () => console.log("server is up and running"));
