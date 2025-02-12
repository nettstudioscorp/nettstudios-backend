const express = require("express");
const router = express.Router();

router.get("/playlists", (req, res) => {
  res.json(playlists);
});

module.exports = router;
