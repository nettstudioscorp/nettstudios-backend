// const express = require("express");
// const router = express.Router();

// const newsArticles = [
//   {
//     id: 1,
//     title:
//       "Ops! Data de lançamento de Metal Gear Solid Delta: Snake Eater é vazada na PS Store",
//     summary:
//       "Aguardado remake do clássico da Konami tem data revelada acidentalmente",
//     image: ``,
//     readingTime: "5 minutos",
//     comments: "3",
//     url: "#",
//   },
//   {
//     id: 2,
//     title:
//       "Se você pausar o trailer de Quarteto Fantástico: Primeiros Passos em 1 minuto e 26 segundos",
//     summary: "Detalhes interessantes foram descobertos pelos fãs",
//     image: "/images/fantastic-four.jpg",
//     readingTime: "3 minutos",
//     comments: "8",
//     url: "#",
//   },
//   {
//     id: 3,
//     title: "Novo Trailer de The Legend of Zelda: Tears of the Kingdom",
//     summary: "Nintendo revela novas habilidades e áreas do jogo",
//     image: "/images/zelda-tears.jpg",
//     readingTime: "4 minutos",
//     comments: "12",
//     url: "#",
//   },
//   {
//     id: 4,
//     title: "Lançamento de Final Fantasy XVI é adiado",
//     summary: "Square Enix anuncia novo prazo para o aguardado RPG",
//     image: "/images/final-fantasy-16.jpg",
//     readingTime: "6 minutos",
//     comments: "5",
//     url: "#",
//   },
//   {
//     id: 5,
//     title: "Atualização do Fortnite traz novo capítulo",
//     summary: "Jogadores encontram novos desafios e recompensas",
//     image: `data:image/jpeg;base64,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...(line too long; chars omitted)`,
//     readingTime: "5 minutos",
//     comments: "3",
//     url: "#",
//   },
//   {
//     id: 6,
//     title: "Resident Evil 4 Remake: Primeiras impressões",
//     summary: "Fãs testam a nova versão do clássico da Capcom",
//     image: "/images/resident-evil-4.jpg",
//     readingTime: "7 minutos",
//     comments: "9",
//     url: "#",
//   },
//   {
//     id: 7,
//     title: "Hogwarts Legacy vende mais de 10 milhões de cópias",
//     summary: "Jogo do universo Harry Potter alcança marca impressionante",
//     image: "/images/hogwarts-legacy.jpg",
//     readingTime: "3 minutos",
//     comments: "6",
//     url: "#",
//   },
//   {
//     id: 8,
//     title: "Nova atualização do Minecraft adiciona recursos",
//     summary: "Jogadores podem experimentar novas criações",
//     image: "/images/minecraft-update.jpg",
//     readingTime: "4 minutos",
//     comments: "10",
//     url: "#",
//   },
//   {
//     id: 9,
//     title: "Cyberpunk 2077 recebe atualização major",
//     summary: "CD Projekt RED melhora performance e adiciona conteúdo",
//     image: "/images/cyberpunk-update.jpg",
//     readingTime: "5 minutos",
//     comments: "7",
//     url: "#",
//   },
//   {
//     id: 10,
//     title: "Elden Ring ganha nova DLC",
//     summary: "FromSoftware anuncia expansão para o jogo do ano",
//     image: "/images/elden-ring-dlc.jpg",
//     readingTime: "4 minutos",
//     comments: "11",
//     url: "#",
//   },
//   {
//     id: 11,
//     title: "Street Fighter 6 fecha o beta teste",
//     summary: "Jogadores testam as novas mecânicas e personagens",
//     image: "/images/street-fighter-6.jpg",
//     readingTime: "3 minutos",
//     comments: "8",
//     url: "#",
//   },
//   {
//     id: 12,
//     title: "Call of Duty: Modern Warfare III tem data confirmada",
//     summary: "Próximo título da franquia chega em 2024",
//     image: "/images/call-of-duty-mw3.jpg",
//     readingTime: "2 minutos",
//     comments: "4",
//     url: "#",
//   },
// ];

// router.get("/", (req, res) => {
//   res.status(200).json(newsArticles);
// });

// module.exports = router;
