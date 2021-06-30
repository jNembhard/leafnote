const mongoose = require("mongoose");

const leafSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Leaf = mongoose.model("Leaf", leafSchema, "leaves");

module.exports = Leaf;
