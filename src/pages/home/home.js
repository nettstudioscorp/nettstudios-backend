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

  {
    id: "Far Cry Primal",
    name: "Far Cry Primal",
    thumbnail:
      "https://c4.wallpaperflare.com/wallpaper/751/507/780/far-cry-primal-video-games-artwork-wallpaper-preview.jpg",
  },

  {
    id: "Dead Rising 3",
    name: "Dead Rising 3",
    thumbnail:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/265550/ac426042dfbb835c81e8891089dc4f86b355a4fa.jpg",
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
        image: "https://images5.alphacoders.com/108/1087059.jpg",
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

      {
        name: "Assassin's Creed Rogue - Episódio 19",
        image: "https://wallpapercave.com/wp/wp2212972.jpg",
        videoId: "lcc3y-0FGGE",
      },

      {
        name: "Assassin's Creed Rogue - Episódio 18",
        image: "https://wallpapercave.com/wp/wp2212972.jpg",
        videoId: "xciDMwUcyLY",
      },

      {
        name: "DeadRising 3 - Episódio 18",
        image: "https://images6.alphacoders.com/644/644434.jpg",
        videoId: "40KPSfpxPMg",
      },

      {
        name: "DeadRising 3 - Episódio 17",
        image: "https://images6.alphacoders.com/644/644434.jpg",
        videoId: "sux3Vo38K4M",
      },

      {
        name: "Assassin's Creed Rogue - Episódio 17",
        image: "https://wallpapercave.com/wp/wp2212972.jpg",
        videoId: "DU0k3DZRjG8",
      },

      {
        name: "DeadRising 3 - Episódio 16",
        image: "https://images6.alphacoders.com/644/644434.jpg",
        videoId: "5U-AO0hayJE",
      },

      {
        name: "Far Cry Primal - Episódio 18",
        image: "https://wallpapercave.com/wp/wp1896894.jpg",
        videoId: "LHbSm1PQPrk",
      },

      {
        name: "Assassin's Creed Rogue - Episódio 16",
        image: "https://wallpapercave.com/wp/wp2212972.jpg",
        videoId: "CQddPil2Do8",
      },

      {
        name: "DeadRising 3 - Episódio 15",
        image: "https://images6.alphacoders.com/644/644434.jpg",
        videoId: "FxXZeYmMV7U",
      },

      {
        name: "DeadRising 3 - Episódio 14",
        image: "https://images6.alphacoders.com/644/644434.jpg",
        videoId: "l-DI46-0Ff4",
      },

      {
        name: "Resident Evil 7 - Episódio 17",
        image:
          "https://c4.wallpaperflare.com/wallpaper/732/871/827/f-e-a-r-2-f-e-a-r-2-project-origin-video-games-f-e-a-r-wallpaper-preview.jpg",
        videoId: "Rhm7sa07rVk",
      },

      {
        name: "Resident Evil 7 - Episódio 16",
        image:
          "https://c4.wallpaperflare.com/wallpaper/732/871/827/f-e-a-r-2-f-e-a-r-2-project-origin-video-games-f-e-a-r-wallpaper-preview.jpg",
        videoId: "6CDgMqy6LyE",
      },

      {
        name: "Assassin's Creed Rogue - Episódio 15",
        image: "https://wallpapercave.com/wp/wp2212972.jpg",
        videoId: "jFrZHXTuz-I",
      },

      {
        name: "Assassin's Creed Rogue - Episódio 14",
        image: "https://wallpapercave.com/wp/wp2212972.jpg",
        videoId: "KpGyYGPIZhA",
      },

      {
        name: "DeadRising 3 - Episódio 13",
        image: "https://images6.alphacoders.com/644/644434.jpg",
        videoId: "YmwkxEx-YBg",
      },

      {
        name: "Resident Evil 7 - Episódio 15",
        image:
          "https://c4.wallpaperflare.com/wallpaper/732/871/827/f-e-a-r-2-f-e-a-r-2-project-origin-video-games-f-e-a-r-wallpaper-preview.jpg",
        videoId: "3hr6tKhQgHw",
      },

      {
        name: "Resident Evil 7 - Episódio 14",
        image:
          "https://c4.wallpaperflare.com/wallpaper/732/871/827/f-e-a-r-2-f-e-a-r-2-project-origin-video-games-f-e-a-r-wallpaper-preview.jpg",
        videoId: "_QQ5gQ1Z7EY",
      },

      {
        name: "Assassin's Creed Valhalla - Episódio 4",
        image: "https://images5.alphacoders.com/108/1087059.jpg",
        videoId: "612cjAypXxw",
      },

      {
        name: "Assassin's Creed Valhalla - Episódio 3",
        image: "https://images5.alphacoders.com/108/1087059.jpg",
        videoId: "g6E0jshwsac",
      },

      {
        name: "Far Cry Primal - Episódio 17",
        image: "https://wallpapercave.com/wp/wp1896894.jpg",
        videoId: "pIKFHyxL8Jw",
      },

      {
        name: "Assassin's Creed Valhalla - Episódio 2",
        image: "https://images5.alphacoders.com/108/1087059.jpg",
        videoId: "vxwt3n7VBfU",
      },

      {
        name: "Far Cry Primal - Episódio 15",
        image: "https://wallpapercave.com/wp/wp1896894.jpg",
        videoId: "qAlSiJK18D4",
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
