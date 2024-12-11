require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Conectado ao MongoDB");
});

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "NettStudios API" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
