/* eslint-disable */
const router = require("express").Router();

const cards = require("../data/cards");

router.get("/cards", (req, res) => {

  res.status(200).json(cards);
  });

module.exports = router;