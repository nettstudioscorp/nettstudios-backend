const express = require("express");
const router = express.Router();

router.get("/games", (req, res) => {
  res.status(200).json(games);
});

module.exports = router;
