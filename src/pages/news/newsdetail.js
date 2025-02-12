// // src/backend/routes/newsdetail.js
// const express = require("express");
// const router = express.Router();

// const newsDetails = [
//   {
//     id: 1,
//     title: "RTX 5070 não Ti chega apenas em março, diz rumor",
//     summary:
//       "Prevista para fevereiro, RTX 5070 teria sido adiada para o mês seguinte, segundo insider",
//     image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/rtx-5070-marco-rumor-912x569.webp`,
//     readingTime: "2 minutos",
//     comments: "0 comentários",
//     fullContent: "Conteúdo completo da notícia sobre a RTX 5070...",
//   },
//   {
//     id: 2,
//     title: "Outro artigo interessante",
//     summary: "Resumo do segundo artigo.",
//     image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/rtx-5070-marco-rumor-912x569.webp`,
//     readingTime: "3 minutos",
//     comments: "5 comentários",
//     fullContent: "Conteúdo completo do segundo artigo...",
//   },
//   // Adicione mais artigos conforme necessário
// ];

// // Rota para obter uma notícia específica pelo ID
// router.get("/:id", (req, res) => {
//   const articleId = parseInt(req.params.id, 10);
//   const article = newsDetails.find((a) => a.id === articleId);

//   if (article) {
//     res.status(200).json(article);
//   } else {
//     res.status(404).json({ message: "Notícia não encontrada" });
//   }
// });

// module.exports = router;
