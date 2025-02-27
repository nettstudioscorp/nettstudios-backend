const express = require("express");
const router = express.Router();

router.get("/categories/playlists", (req, res) => {
  res.status(200).json(mockAction);
});

module.exports = router;
