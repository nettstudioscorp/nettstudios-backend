require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./src/auth/routes/auth");
const homeRoutes = require("./src/pages/home/home");
const playlistRoutes = require("./src/pages/playlists/playlist");
// const playlistPlayerRoutes = require("./src/pages/playlists/playlistPlayer");
const videoRoutes = require("./src/pages/videos/videos");
const liveRoutes = require("./src/pages/live/live");
const newsRoutes = require("./src/pages/news/news");
const communityRoutes = require("./src/pages/community/community");

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Conectado ao MongoDB");
});

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Não permitido pelo CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/playlists", playlistRoutes);
// app.use("/api/:gameId", playlistPlayerRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/live", liveRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/community", communityRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "NettStudios API 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log("Origens permitidas:", allowedOrigins);
});
