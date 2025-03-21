const express = require("express");
const router = express.Router();

const playlists = {
  featured001: [
    {
      id: "Far Cry Classic",
      name: "Far Cry Classic",
      thumbnail:
        "https://www.zastavki.com/pictures/1280x720/2008/Games_far_cry_007167_26.jpg",
      description: "Uma aventura emocionante em uma ilha tropical.",
      gameStatus: "Completo",
      releaseDate: "??",
      year: "2004",
    },
  ],

  featured002: [
    {
      id: "Assassin's Creed III Remastered",
      name: "Assassin's Creed III Remastered",
      thumbnail:
        "https://i.ytimg.com/vi/x0tguNWiuu4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCfhJgmVp6ApBFGKZ2B6s1dU7Kxg",
      description: "Reviva a Revolução Americana com gráficos remasterizados.",
      gameStatus: "Completo",
      releaseDate: "??",
      year: "2012",
    },

    {
      id: "Assassin's Creed Valhalla",
      name: "Assassin's Creed Valhalla",
      thumbnail:
        "https://wallpapers.com/images/hd/assassin-s-creed-valhalla-varin-s-axe-k7diwwziiqd0t1uq.jpg",
      description: "Explore a era Viking e conquiste novas terras.",
      gameStatus: "Em lançamento",
      releaseDate: "??",
      year: "2020",
    },

    {
      id: "Assassin's Creed Rogue",
      name: "Assassin's Creed Rogue",
      thumbnail:
        "https://c4.wallpaperflare.com/wallpaper/138/449/106/assassins-creed-rogue-wallpaper-preview.jpg",
      description: "Viva a história de um assassino que se torna um templário.",
      gameStatus: "Em lançamento",
      releaseDate: "??",
      year: "2014",
    },
  ],

  featured003: [
    {
      id: "AlanWake",
      name: "Alan Wake",
      thumbnail:
        "https://www.finalfaqs.com.br/wp-content/uploads/2020/12/Alan-Wake.jpg.webp",
      description: "Um thriller psicológico em uma cidade misteriosa.",
      gameStatus: "Completo",
      releaseDate: "??",
      year: "2010",
    },
  ],

  featured004: [],
  featured005: [],

  // =========== Player  =============

  "Far Cry Classic": [
    {
      videoId: "83JuFaz0KdE",
      title: "Far Cry Classic - Parte 1",
    },
    {
      videoId: "aVvNS0ZB0cM",
      title: "Far Cry Classic - Parte 2",
    },
    {
      videoId: "gLtW2c5X12I",
      title: "Far Cry Classic - Parte 3",
    },
    {
      videoId: "R_IClH0f7Xg",
      title: "Far Cry Classic - Parte 4",
    },
    {
      videoId: "nPwzXKa5IXc",
      title: "Far Cry Classic - Parte 5",
    },
    {
      videoId: "N6yy1kC82Y4",
      title: "Far Cry Classic - Parte 6",
    },
    {
      videoId: "G735PTt590o",
      title: "Far Cry Classic - Parte 7",
    },
    {
      videoId: "Jx_Vm2cBxao",
      title: "Far Cry Classic - Parte 8",
    },
    {
      videoId: "aNlAtmlEQcs",
      title: "Far Cry Classic - Parte 9",
    },
  ],

  "Assassin's Creed III Remastered": [
    {
      videoId: "eULaVtrz6ek",
      title: "Assassin's Creed III Remastered - Parte 1",
    },
    {
      videoId: "PUCozvQU1_0",
      title: "Assassin's Creed III Remastered - Parte 2",
    },
    {
      videoId: "h7MP4RRtUj8",
      title: "Assassin's Creed III Remastered - Parte 3",
    },
    {
      videoId: "rXiPLrpnAYk",
      title: "Assassin's Creed III Remastered - Parte 4",
    },
    {
      videoId: "yE9uzBrIGgE",
      title: "Assassin's Creed III Remastered - Parte 5",
    },
    {
      videoId: "e7zzsmLv1lU",
      title: "Assassin's Creed III Remastered - Parte 6",
    },
    {
      videoId: "zwmL7UvdIM8",
      title: "Assassin's Creed III Remastered - Parte 7",
    },
    {
      videoId: "z8csaOu_ntM",
      title: "Assassin's Creed III Remastered - Parte 8",
    },
    {
      videoId: "MEExe9N2Sqw",
      title: "Assassin's Creed III Remastered - Parte 9",
    },
    {
      videoId: "CzDhlGKWt8I",
      title: "Assassin's Creed III Remastered - Parte 10",
    },
    {
      videoId: "2p92B2XDL0I",
      title: "Assassin's Creed III Remastered - Parte 11",
    },
    {
      videoId: "80_0LMQvrIg",
      title: "Assassin's Creed III Remastered - Parte 12",
    },
    {
      videoId: "zYu8Zn0el9Y",
      title: "Assassin's Creed III Remastered - Parte 13",
    },
  ],
  "Assassin's Creed Valhalla": [
    {
      videoId: "Wy_TSJIKdq0",
      title: "Assassin's Creed Valhalla - Parte 1",
    },
    {
      videoId: "vxwt3n7VBfU",
      title: "Assassin's Creed Valhalla - Parte 2",
    },
    {
      videoId: "g6E0jshwsac",
      title: "Assassin's Creed Valhalla - Parte 3",
    },
    {
      videoId: "612cjAypXxw",
      title: "Assassin's Creed Valhalla - Parte 4",
    },
    {
      videoId: "rNEra09Lkyc",
      title: "Assassin's Creed Valhalla - Parte 5",
    },
    {
      videoId: "8YVNOXuQuts",
      title: "Assassin's Creed Valhalla - Parte 6",
    },
  ],

  "Assassin's Creed Rogue": [
    {
      videoId: "w6du2jvQDow",
      title: "Assassin's Creed Rogue - Parte 1",
    },

    {
      videoId: "LY_2a45BQBk",
      title: "Assassin's Creed Rogue - Parte 2",
    },
    {
      videoId: "pX5XtlmSEuA",
      title: "Assassin's Creed Rogue - Parte 3",
    },
    {
      videoId: "YxBuEuurPvY",
      title: "Assassin's Creed Rogue - Parte 4",
    },
    {
      videoId: "mkmj1iOgdZE",
      title: "Assassin's Creed Rogue - Parte 5",
    },
    {
      videoId: "PpzEggg9MX8",
      title: "Assassin's Creed Rogue - Parte 6",
    },
    {
      videoId: "_ZiPcVKEhgw",
      title: "Assassin's Creed Rogue - Parte 7",
    },
    {
      videoId: "1zQZcRC-78Y",
      title: "Assassin's Creed Rogue - Parte 8",
    },
    {
      videoId: "XZBpA3mB-2A",
      title: "Assassin's Creed Rogue - Parte 9",
    },
    {
      videoId: "UXPC8bWsznI",
      title: "Assassin's Creed Rogue - Parte 10",
    },
  ],

  AlanWake: [
    {
      videoId: "QdoblIW1LnI",
      title: "Alan Wake - Parte 1",
    },
    {
      videoId: "ySeVKICbLCU",
      title: "Alan Wake - Parte 2",
    },
    {
      videoId: "MkOZrV0Cs_8",
      title: "Alan Wake - Parte 3",
    },
    {
      videoId: "Ts3jlYyQfGk",
      title: "Alan Wake - Parte 4",
    },
    {
      videoId: "QtafjvNLOqE",
      title: "Alan Wake - Parte 5",
    },
    {
      videoId: "bBfBr6VvcJ4",
      title: "Alan Wake - Parte 6",
    },
  ],
};

router.get("/playlists", (req, res) => {
  res.json(playlists);
});

router.get("/playlists/:gameId", (req, res) => {
  const { gameId } = req.params;
  const playlist = playlists[gameId];

  if (playlist) {
    res.json(playlist);
  } else {
    res.status(404).json({ message: "Playlist not found" });
  }
});

module.exports = router;
