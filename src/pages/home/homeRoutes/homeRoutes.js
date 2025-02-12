const express = require("express");
const router = express.Router();

router.get("/playlists-em-lancamento", (req, res) => {
  console.log("Acessando playlists em lançamento");
  res.json(playlistsEmLançamento);
});

router.get("/videos", (req, res) => {
  res.json(videosSections);
});

router.get("/playlists-destaques", (req, res) => {
  console.log("Acessando playlists destaques");
  res.json(playlistsDestaques);
});

module.exports = router;
