//This can be used to create a build file for your React app
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

const publicPath = path.join(__dirname, "..", "/public");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log("Server is running on Port " + PORT));
