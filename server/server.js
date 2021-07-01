const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const wakeDyno = require("woke-dyno");
const bodyParser = require("body-parser");

// Force webpage redirect to https
const secure = require("ssl-express-www");

const app = express();
app.use(bodyParser.json());
app.use(secure);

const PORT = process.env.PORT || 8080;

const routes = require("./routes/home");
app.use("/routes/home", routes);

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build"));
});

const DYNO_URL = "https://leaf-note.herokuapp.com";
// const URL = "mongodb://localhost:27017/leafDB";
const URI = process.env.MONGODB_URI;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(URI, connectionParams)
  .then(() => console.log("Database has connected successfully!"))
  .catch((err) => console.log(err));

app.listen(PORT, function () {
  wakeDyno(DYNO_URL).start(); // prevents app from falling asleep
  console.log("Server is running on Port " + PORT);
});
