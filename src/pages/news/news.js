const express = require("express");
const router = express.Router();

const newsArticles = [
  {
    id: 1,
    title: "RTX 5070 não Ti chega apenas em março, diz rumor",
    summary:
      "Prevista para fevereiro, RTX 5070 teria sido adiada para o mês seguinte, segundo insider",
    image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/rtx-5070-marco-rumor-912x569.webp`,
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/nvidia/rtx-5070-nao-ti-chega-apenas-em-marco-diz-rumor/",
  },

  {
    id: 2,
    title: "Unity anuncia novas demissões",
    summary:
      "Prevista para fevereiro, RTX 5070 teria sido adiada para o mês seguinte, segundo insider",
    image: `https://www.adrenaline.com.br/wp-content/uploads/2023/11/23_11_29_093922-912x569.webp`,
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/games/nova-rodada-demissoes-unity-2024/",
  },

  {
    id: 3,
    title: "Alan Wake 2 já dá lucro para a Remedy",
    summary:
      "Alan Wake 2 recupera custos de produção e marketing, atingindo lucro para a Remedy após vender mais de 2 milhões de cópias",
    image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/alan-wake-2-912x569.webp`,
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/games/alan-wake-2-remedy-lucro/",
  },

  {
    id: 4,
    title:
      "Crytek demite 15% dos funcionários e paralisa desenvolvimento de Crysis 4",
    summary:
      "A Crytek deve cortar cerca de 60 funcionários e direcionar toda a sua atenção para Hunt: Showdown 1896",
    image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/Crytek-demite-15-dos-funcionarios-e-paralisa-desenvolvimento-de-Crysis-4-912x569.webp`,
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/games/crytek-demite-15-dos-funcionarios-e-paralisa-desenvolvimento-de-crysis-4/",
  },

  {
    id: 5,
    title:
      "Intel registra segundo maior crescimento em 2025 após prometer chips de IA feitos nos EUA",
    summary:
      "Ações da Intel disparam 7% após VP JD Vance prometer que os chips de IA mais poderosos serão projetados e fabricados nos Estados Unidos.",
    image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/intel-registra-segundo-maior-crescimento-em-2025-912x569.webp`,
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/wp-content/uploads/2025/02/intel-registra-segundo-maior-crescimento-em-2025-912x569.webp",
  },

  {
    id: 6,
    title: "PUBG recebe atualização com mudanças em veículos, armas e mais",
    summary:
      "PUBG recebe atualização com ajustes em veículos, armas e novo modo 1v1 na Arena, disponível para PC e consoles",
    image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/pubg-atualizacao-1-912x569.webp`,
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/games/pubg-atualizacao-veiculos-armas/",
  },

  {
    id: 7,
    title:
      "Os clássicos God of War podem ter remasterizações anunciadas nessa semana [RUMOR]",
    summary:
      "Uma nova coletânea de God of War pode ser revelada na State of Play, reunindo os três primeiros jogos da franquia em versões remasterizadas",
    image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/god-of-war-3-remastered-912x569.jpg`,
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/games/playstation/os-classicos-god-of-war-podem-ter-remasterizacoes-anunciadas-nessa-semana-rumor/",
  },

  {
    id: 8,
    title: "Take-Two ainda não garante GTA 6 para PC",
    summary:
      "CEO da Take-Two destaca importância do PC, mas não confirma GTA 6 para a plataforma",
    image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/GTA-6-esta-no-rumo-para-sair-em-2025-reforca-novamente-a-Take-Two-912x569.webp`,
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/games/gta-6-pc-take-two-sem-confirmacao/",
  },

  {
    id: 9,
    title:
      "Hideo Kojima revelará novas informações de Death Stranding 2 no SXSW 2025 em março",
    summary:
      "Hideo Kojima apresentará novos detalhes de Death Stranding 2 no SXSW 2025. O painel acontecerá em 9 de março e trará informações inéditas",
    image: `https://www.adrenaline.com.br/wp-content/uploads/2025/02/kojima-912x569.webp`,
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/games/playstation/hideo-kojima-revelara-novas-informacoes-de-death-stranding-2-no-sxsw-2025-em-marco/",
  },

  {
    id: 10,
    title: "Phasmophobia celebra vendas com novos conteúdos",
    summary:
      "Phasmophobia atinge 2 milhões de cópias vendidas e recebe novas atualizações com reformulações e conteúdos inéditos",
    image:
      "https://www.adrenaline.com.br/wp-content/uploads/2025/02/Phasmophobia-1-912x569.webp",
    readingTime: "",
    comments: "",
    url: "https://www.adrenaline.com.br/games/phasmophobia-celebra-vendas-com-novos-conteudos/",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(newsArticles);
});

module.exports = router;
