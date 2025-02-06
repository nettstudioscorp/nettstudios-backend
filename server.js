require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./src/auth/routes/auth");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Conectado ao MongoDB");
});

const app = express();

app.use(
  cors({
    origin: "https://dev-nettstudios-frontend.vercel.app",
    // origin: "https://nettstudios-frontend-staging.vercel.app/",
    // origin: "http://www.nettstudios.com.br",
    // origin: "http://localhost:3001",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// TODO: app.get('/videos', (req, res) => {
//   res.json(videos);
// });

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "NettStudios API 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
