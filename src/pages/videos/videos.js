const express = require("express");
const router = express.Router();

const videos = [
  {
    id: "1",
    videoId: "8YVNOXuQuts",
    snippet: {
      title: "Assassin's Creed Valhalla - Episódio 6",
      thumbnails: {
        medium: {
          url: "https://images5.alphacoders.com/108/1087059.jpg",
        },
      },
      description: "6 de jul. de 2024",
    },
    isExclusive: false,
  },

  {
    id: "2",
    videoId: "rNEra09Lkyc",
    snippet: {
      title: "Assassin's Creed Valhalla - Episódio 5",
      thumbnails: {
        medium: {
          url: "https://images5.alphacoders.com/108/1087059.jpg",
        },
      },
      description: "23 de jun. de 2024",
    },
    isExclusive: false,
  },

  {
    id: "3",
    videoId: "UI4s7S7OFtA",
    snippet: {
      title: "Far Cry Primal - Episódio 19",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp1896894.jpg",
        },
      },
      description: "17 de jun. de 2024",
    },
    isExclusive: false,
  },

  {
    id: "4",
    videoId: "5_seyG6_wmI",
    snippet: {
      title: "Assassin's Creed Rogue  - Episódio 21",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp2212972.jpg",
        },
      },
      description: "10 de jun. de 2024",
    },
    isExclusive: false,
  },

  {
    id: "5",
    videoId: "Hk0Mpe-9kYw",
    snippet: {
      title: "Assassin's Creed Rogue - Episódio 20",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp2212972.jpg",
        },
      },
      description: "10 de jun. de 2024",
    },
    isExclusive: false,
  },

  {
    id: "6",
    videoId: "lcc3y-0FGGE",
    snippet: {
      title: "Assassin's Creed Rogue - Episódio 19",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp2212972.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "7",
    videoId: "xciDMwUcyLY",
    snippet: {
      title: "Assassin's Creed Rogue - Episódio 18",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp2212972.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "8",
    videoId: "40KPSfpxPMg",
    snippet: {
      title: "DeadRising 3 - Episódio 18",
      thumbnails: {
        medium: {
          url: "https://images6.alphacoders.com/644/644434.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "9",
    videoId: "sux3Vo38K4M",
    snippet: {
      title: "DeadRising 3 - Episódio 17",
      thumbnails: {
        medium: {
          url: "https://images6.alphacoders.com/644/644434.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "10",
    videoId: "DU0k3DZRjG8",
    snippet: {
      title: "Assassin's Creed Rogue - Episódio 17",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp2212972.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "11",
    videoId: "5U-AO0hayJE",
    snippet: {
      title: "DeadRising 3 - Episódio 16",
      thumbnails: {
        medium: {
          url: "https://images6.alphacoders.com/644/644434.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "12",
    videoId: "LHbSm1PQPrk",
    snippet: {
      title: "Far Cry Primal - Episódio 18",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp1896894.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "13",
    videoId: "CQddPil2Do8",
    snippet: {
      title: "Assassin's Creed Rogue - Episódio 16",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp2212972.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "14",
    videoId: "FxXZeYmMV7U",
    snippet: {
      title: "DeadRising 3 - Episódio 15",
      thumbnails: {
        medium: {
          url: "https://images6.alphacoders.com/644/644434.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "15",
    videoId: "l-DI46-0Ff4",
    snippet: {
      title: "DeadRising 3 - Episódio 14",
      thumbnails: {
        medium: {
          url: "https://images6.alphacoders.com/644/644434.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "16",
    videoId: "Rhm7sa07rVk",
    snippet: {
      title: "Resident Evil 7 - Episódio 17",
      thumbnails: {
        medium: {
          url: "https://c4.wallpaperflare.com/wallpaper/732/871/827/f-e-a-r-2-f-e-a-r-2-project-origin-video-games-f-e-a-r-wallpaper-preview.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "17",
    videoId: "6CDgMqy6LyE",
    snippet: {
      title: "Resident Evil 7 - Episódio 16",
      thumbnails: {
        medium: {
          url: "https://c4.wallpaperflare.com/wallpaper/732/871/827/f-e-a-r-2-f-e-a-r-2-project-origin-video-games-f-e-a-r-wallpaper-preview.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "18",
    videoId: "jFrZHXTuz-I",
    snippet: {
      title: "Assassin's Creed Rogue - Episódio 15",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp2212972.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "19",
    videoId: "KpGyYGPIZhA",
    snippet: {
      title: "Assassin's Creed Rogue - Episódio 14",
      thumbnails: {
        medium: {
          url: "https://wallpapercave.com/wp/wp2212972.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "20",
    videoId: "YmwkxEx-YBg",
    snippet: {
      title: "DeadRising 3 - Episódio 13",
      thumbnails: {
        medium: {
          url: "https://images6.alphacoders.com/644/644434.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "21",
    videoId: "3hr6tKhQgHw",
    snippet: {
      title: "Resident Evil 7 - Episódio 15",
      thumbnails: {
        medium: {
          url: "https://c4.wallpaperflare.com/wallpaper/732/871/827/f-e-a-r-2-f-e-a-r-2-project-origin-video-games-f-e-a-r-wallpaper-preview.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },

  {
    id: "22",
    videoId: "_QQ5gQ1Z7EY",
    snippet: {
      title: "Resident Evil 7 - Episódio 14",
      thumbnails: {
        medium: {
          url: "https://c4.wallpaperflare.com/wallpaper/732/871/827/f-e-a-r-2-f-e-a-r-2-project-origin-video-games-f-e-a-r-wallpaper-preview.jpg",
        },
      },
      description: "13 de fev. de 2025",
    },
    isExclusive: false,
  },
];

router.get("/videos", (req, res) => {
  res.status(200).json(videos);
});

module.exports = router;
