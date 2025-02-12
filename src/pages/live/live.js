const express = require("express");
const router = express.Router();

const games = {
  listA: [
    {
      id: "WatchDogs",
      name: "Watch Dogs",
      thumbnail:
        "https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2014/05/22/watch-dogs-multi.jpg",
    },
  ],

  // listB: [
  //   {
  //     id: "WatchDogs2",
  //     name: "Watch Dogs 2",
  //     thumbnail:
  //       "https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2014/05/22/watch-dogs-multi.jpg",
  //   },
  // ],
};

const playlists = {
  WatchDogs: [
    {
      videoId: "E8tjZoSwD0c",
      title: "WATCHDOGS - Parte 1",
    },
    {
      videoId: "sP1_l6cDu3I",
      title: "WATCHDOGS - Parte 2",
    },
  ],

  // WatchDogs2: [
  //   {
  //     videoId: "E8tjZoSwD0c",
  //     title: "WATCHDOGS 2 - Parte 1",
  //   },
  // ],
};

router.get("/games", (req, res) => {
  res.status(200).json(games);
});

router.get("/playlists/:gameId", (req, res) => {
  const { gameId } = req.params;
  const gamePlaylist = playlists[gameId];
  if (gamePlaylist) {
    res.status(200).json(gamePlaylist);
  } else {
    res.status(404).json({ message: "Playlist not found" });
  }
});

module.exports = router;
