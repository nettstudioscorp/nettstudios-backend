const express = require("express");
const router = express.Router();

const communityPosts = [
  {
    author: "NettStudios",
    authorLogo: "NS",
    time: "07/12/24",
    content: `Atualização da Plataforma v0.0.7
    traz melhorias significativas na experiência do usuário. Para mais informações, acesse a seção Updates, onde você encontrará o relatório e PDF da atualização da versão da plataforma.`,
    likes: 0,
    comments: [],
    expanded: false,
  },
  {
    author: "NettStudios",
    authorLogo: "NS",
    time: "há 2 meses (editado)",
    content: `Novidades em Breve no Canal!:
    Olá, pessoal!

    Tenho uma novidade empolgante para compartilhar com vocês: estou trabalhando no desenvolvimento de um novo site para o canal! 🚀

    Neste novo espaço, vocês poderão encontrar uma variedade de conteúdos, incluindo gameplays emocionantes, notícias fresquinhas do mundo dos games, podcasts interessantes, e também conteúdos sobre programação. A programação mudou a minha forma de pensar sobre muitas coisas e, por isso, estou animado para trazer essa nova perspectiva para o canal. 🖥️🎮

    Durante esse período de desenvolvimento, o canal entrará em uma pausa indefinida. Mas não se preocupem, em breve voltaremos com tudo e com muitas novidades para vocês!`,
    likes: 3,
    comments: [],
    expanded: false,
  },
  {
    author: "NettStudios",
    authorLogo: "NS",
    time: "há 1 ano",
    content: `Agenda deste mês de Outubro:
    - Assassin's Creed Brotherhood
    - Mafia III Definitive Edition
    - Far Cry 2
    - Forza Horizon`,
    likes: 3,
    comments: [],
    expanded: false,
  },
];

router.get("/", (req, res) => {
  res.status(200).json(communityPosts);
});

router.get("/:index", (req, res) => {
  const index = parseInt(req.params.index, 10);
  const post = communityPosts[index];

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post não encontrado" });
  }
});

module.exports = router;
