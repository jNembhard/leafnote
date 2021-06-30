const express = require("express");
const router = express.Router();

const Leaf = require("../models/leaf");

router.get("/", function (req, res) {
  const data = req.body;
  Leaf.find()
    .then((leaves) => res.json(leaves))
    .catch((err) => console.log(err));
});

router.post("/", function (req, res) {
  const { title, content } = req.body;
  const newLeaf = new Leaf({
    title: title,
    content: content,
  });
  newLeaf
    .save()
    .then(() =>
      res.json({
        message: "Data received!",
      })
    )
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: "Error creating account",
      })
    );
});

module.exports = router;
