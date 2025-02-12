const express = require("express");
const router = express.Router();

const playlistsEmLançamento = [
  {
    id: "Assassin's Creed Rogue",
    name: "Assassin's Creed Rogue",
    thumbnail:
      "https://c4.wallpaperflare.com/wallpaper/138/449/106/assassins-creed-rogue-wallpaper-preview.jpg",
  },
  {
    id: "Assassin's Creed Valhalla",
    name: "Assassin's Creed Valhalla",
    thumbnail:
      "https://wallpapers.com/images/hd/assassin-s-creed-valhalla-varin-s-axe-k7diwwziiqd0t1uq.jpg",
  },
];

const playlistsDestaques = [
  {
    id: "Far Cry Classic",
    name: "Far Cry Classic",
    thumbnail:
      "https://www.zastavki.com/pictures/1280x720/2008/Games_far_cry_007167_26.jpg",
  },
  {
    id: "Assassin's Creed III Remastered",
    name: "Assassin's Creed III Remastered",
    thumbnail:
      "https://i.ytimg.com/vi/x0tguNWiuu4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCfhJgmVp6ApBFGKZ2B6s1dU7Kxg",
  },
  {
    id: "Assassin's Creed Valhalla",
    name: "Assassin's Creed Valhalla",
    thumbnail:
      "https://wallpapers.com/images/hd/assassin-s-creed-valhalla-varin-s-axe-k7diwwziiqd0t1uq.jpg",
  },
  {
    id: "Assassin's Creed Rogue",
    name: "Assassin's Creed Rogue",
    thumbnail:
      "https://c4.wallpaperflare.com/wallpaper/138/449/106/assassins-creed-rogue-wallpaper-preview.jpg",
  },
];

const videosSections = [
  {
    title: "Últimos Episódios Adicionados",
    items: [
      {
        name: "Assassin's Creed Valhalla - Episódio 6",
        image: "https://images5.alphacoders.com/108/1087059.jpg",
        videoId: "8YVNOXuQuts",
      },
      {
        name: "Assassin's Creed Valhalla - Episódio 5",
        image:
          "https://wallpapers.com/images/hd/assassin-s-creed-valhalla-varin-s-axe-k7diwwziiqd0t1uq.jpg",
        videoId: "rNEra09Lkyc",
      },
      {
        name: "Far Cry Primal - Episódio 19",
        image: "https://wallpapercave.com/wp/wp1896894.jpg",
        videoId: "UI4s7S7OFtA",
      },
      {
        name: "Assassin's Creed Rogue - Episódio 21",
        image: "https://wallpapercave.com/wp/wp2212972.jpg",
        videoId: "5_seyG6_wmI",
      },
      {
        name: "Assassin's Creed Rogue - Episódio 20",
        image: "https://wallpapercave.com/wp/wp2212972.jpg",
        videoId: "Hk0Mpe-9kYw",
      },
    ],
  },
];

router.get("/playlists-em-lancamento", (req, res) => {
  res.json(playlistsEmLançamento);
});

router.get("/videos", (req, res) => {
  res.json(videosSections);
});

router.get("/playlists-destaques", (req, res) => {
  res.json(playlistsDestaques);
});

module.exports = router;
