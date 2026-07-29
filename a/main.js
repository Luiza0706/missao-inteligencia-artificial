const story = {
  start: {
    title: "O SEGREDO DO AVÔ",
    narrative: "Você herdou o diário do seu avô. Enquanto ajuda diferentes pessoas na cidade, começa a perceber que as vidas delas estão interligadas por um evento misterioso do passado... e o seu avô estava no centro de tudo.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    sceneText: "Hoje pela manhã, duas pessoas pediram sua ajuda. Cada uma carrega um pedaço do passado.",
    choices: [
      { text: "Ajudar a senhora da padaria", next: "padaria" },
      { text: "Ajudar o mecânico da oficina", next: "mecanico" }
    ]
  },

  padaria: {
    narrative: "A senhora Dona Helena da padaria segura uma carta amarelada. As mãos tremem enquanto fala.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    sceneText: "“Seu avô me deu esta carta em 1987. Disse que um dia alguém da família viria buscá-la. Dentro há um nome… e um endereço que não existe mais.” Você lê: o nome é o mesmo que o mecânico mencionou ontem.",
    choices: [
      { text: "Perguntar sobre o endereço", next: "endereco" },
      { text: "Ir até a oficina agora", next: "oficina" }
    ]
  },

  mecanico: {
    narrative: "Seu Carlos limpa as mãos sujas de graxa e aponta para uma foto antiga pregada na parede da oficina.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    sceneText: "“Seu avô salvou esta oficina em 1987. Depois do incêndio na antiga fábrica, ele chegou com documentos e um acordo estranho. Nunca quis falar sobre o que realmente aconteceu naquela noite.”",
    choices: [
      { text: "Perguntar sobre a fábrica", next: "fabrica" },
      { text: "Ir até a padaria agora", next: "padaria2" }
    ]
  },

  endereco: {
    narrative: "O endereço na carta leva a um terreno vazio onde antes ficava a Fábrica Aurora. As pessoas mais velhas ainda baixam a voz ao falar do lugar.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    sceneText: "Uma placa enferrujada ainda resiste: “Projeto Aurora — Pesquisa & Desenvolvimento”. No diário do seu avô, a mesma palavra aparece sublinhada dezenas de vezes.",
    choices: [
      { text: "Abrir o diário na página marcada", next: "diario" },
      { text: "Procurar testemunhas da época", next: "testemunhas" }
    ]
  },

  oficina: {
    narrative: "Você chega à oficina. Seu Carlos reconhece a carta imediatamente.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    sceneText: "“Então ela finalmente te entregou… Seu avô prometeu que o segredo só seria revelado quando as peças se encaixassem. A fábrica, a carta e o incêndio não foram acidente.”",
    choices: [
      { text: "Abrir o diário na página marcada", next: "diario" },
      { text: "Perguntar o que ele sabe do incêndio", next: "incendio" }
    ]
  },

  fabrica: {
    narrative: "A Fábrica Aurora era oficialmente uma indústria têxtil. Mas quem trabalhou lá conta outra história.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    sceneText: "“Eles desenvolviam máquinas que ‘aprendiam sozinhas’. Seu avô era o engenheiro-chefe. Na noite do incêndio, ele foi o único que saiu carregando caixas de documentos… e nunca mais falou sobre o projeto.”",
    choices: [
      { text: "Abrir o diário na página marcada", next: "diario" },
      { text: "Procurar mais testemunhas", next: "testemunhas" }
    ]
  },

  padaria2: {
    narrative: "Dona Helena te recebe com um olhar de alívio. Parece que esperava por este momento há décadas.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    sceneText: "“Seu Carlos te mandou, não foi? Então as coisas estão se alinhando. Seu avô disse que quando o neto ajudasse tanto a padaria quanto a oficina, o ciclo se fecharia.”",
    choices: [
      { text: "Abrir o diário na página marcada", next: "diario" },
      { text: "Perguntar sobre o ciclo", next: "ciclo" }
    ]
  },

  testemunhas: {
    narrative: "Você encontra três pessoas que trabalharam na Fábrica Aurora. Todas contam a mesma versão, com detalhes diferentes.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    sceneText: "O projeto não era sobre tecidos. Era sobre uma máquina capaz de prever padrões humanos. Seu avô descobriu algo perigoso demais… e preferiu apagar os rastros no fogo.",
    choices: [
      { text: "Ler a última entrada do diário", next: "diario" }
    ]
  },

  incendio: {
    narrative: "Seu Carlos baixa a voz, mesmo estando sozinho na oficina.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
    sceneText: "“O fogo começou no laboratório. Seu avô gritou para todos saírem. Depois voltou sozinho e trancou a porta. Quando os bombeiros chegaram, só restavam cinzas e ele… com o diário debaixo do braço.”",
    choices: [
      { text: "Ler a última entrada do diário", next: "diario" }
    ]
  },

  ciclo: {
    narrative: "Dona Helena segura suas mãos com carinho.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    sceneText: "“Seu avô acreditava que o conhecimento só deveria voltar quando alguém da família demonstrasse empatia suficiente. Ajudar pessoas diferentes, sem interesse… era o teste. Você passou.”",
    choices: [
      { text: "Ler a última entrada do diário", next: "diario" }
    ]
  },

  diario: {
    narrative: "Você abre o diário na página marcada com uma fita vermelha. A letra do seu avô está trêmula, mas determinada.",
    image: "https://images.unsplash.com/photo-1456513080880-7d93aaa2ba29?w=800&q=80",
    sceneText: "“Se você está lendo isto, significa que ajudou pessoas cujas vidas eu toquei em 1987. A Fábrica Aurora não fabricava tecidos. Criávamos o protótipo de uma inteligência que aprendia com o comportamento humano. Eu vi o perigo. Por isso queimei o laboratório. Mas guardei o essencial: a ideia de que a tecnologia só deve existir se servir às pessoas… nunca o contrário. Agora o segredo é seu.”",
    choices: [
      { text: "Aceitar o legado do avô", next: "final" }
    ]
  },

  final: {
    narrative: "O diário se fecha. Pela primeira vez, todas as peças se encaixam.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    sceneText: "As pessoas que você ajudou não eram coincidências. Seu avô preparou o caminho décadas atrás. O verdadeiro segredo não era a máquina… era a prova de que você escolheria o lado humano. O legado agora é seu.",
    choices: []
  }
};

const titleEl = document.getElementById("title");
const narrativeEl = document.getElementById("narrative");
const imageEl = document.getElementById("story-image");
const sceneTextEl = document.getElementById("scene-text");
const choicesEl = document.getElementById("choices");

function renderScene(sceneKey) {
  const scene = story[sceneKey];
  if (!scene) return;

  document.querySelector(".content").classList.remove("fade-in");
  void document.querySelector(".content").offsetWidth;
  document.querySelector(".content").classList.add("fade-in");

  if (scene.title) {
    titleEl.textContent = scene.title;
  }

  narrativeEl.textContent = scene.narrative;
  imageEl.src = scene.image;
  imageEl.alt = "Cena da história";
  sceneTextEl.textContent = scene.sceneText;

  choicesEl.innerHTML = "";

  if (scene.choices && scene.choices.length > 0) {
    scene.choices.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = choice.text;
      btn.addEventListener("click", () => renderScene(choice.next));
      choicesEl.appendChild(btn);
    });
  } else {
    const finalBox = document.createElement("div");
    finalBox.className = "final-reveal";
    finalBox.innerHTML = `<strong>Fim da aventura.</strong><br>O segredo do avô foi revelado.`;
    choicesEl.appendChild(finalBox);

    const restart = document.createElement("button");
    restart.className = "restart-btn visible";
    restart.textContent = "Recomeçar a história";
    restart.addEventListener("click", () => renderScene("start"));
    choicesEl.appendChild(restart);
  }
}

renderScene("start");