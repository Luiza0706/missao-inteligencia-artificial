const story = {
  start: {
    title: "O SEGREDO DO AVO",
    narrative: "Voce herdou o diario do seu avo. Enquanto ajuda diferentes pessoas na cidade, comeca a perceber que as vidas delas estao interligadas por um evento misterioso do passado... e o seu avo estava no centro de tudo.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    sceneText: "Hoje pela manha, duas pessoas pediram sua ajuda. Cada uma carrega um pedaco do passado.",
    choices: [
      { text: "Ajudar a senhora da padaria", next: "padaria" },
      { text: "Ajudar o mecanico da oficina", next: "mecanico" }
    ]
  },

  padaria: {
    narrative: "A senhora Dona Helena da padaria segura uma carta amarelada. As maos tremem enquanto fala.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    sceneText: "“Seu avo me deu esta carta em 1987. Disse que um dia alguem da familia viria busca-la. Dentro ha um nome… e um endereco que nao existe mais.” Voce le: o nome e o mesmo que o mecanico mencionou ontem.",
    choices: [
      { text: "Perguntar sobre o endereco", next: "endereco" },
      { text: "Ir ate a oficina agora", next: "oficina" }
    ]
  },

  mecanico: {
    narrative: "Seu Carlos limpa as maos sujas de graxa e aponta para uma foto antiga pregada na parede da oficina.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    sceneText: "“Seu avo salvou esta oficina em 1987. Depois do incendio na antiga fabrica, ele chegou com documentos e um acordo estranho. Nunca quis falar sobre o que realmente aconteceu naquela noite.”",
    choices: [
      { text: "Perguntar sobre a fabrica", next: "fabrica" },
      { text: "Ir ate a padaria agora", next: "padaria2" }
    ]
  },

  endereco: {
    narrative: "O endereco na carta leva a um terreno vazio onde antes ficava a Fabrica Aurora. As pessoas mais velhas ainda baixam a voz ao falar do lugar.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    sceneText: "Uma placa enferrujada ainda resiste: “Projeto Aurora — Pesquisa & Desenvolvimento”. No diario do seu avo, a mesma palavra aparece sublinhada dezenas de vezes.",
    choices: [
      { text: "Abrir o diario na pagina marcada", next: "diario" },
      { text: "Procurar testemunhas da epoca", next: "testemunhas" }
    ]
  },

  oficina: {
    narrative: "Voce chega a oficina. Seu Carlos reconhece a carta imediatamente.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    sceneText: "“Entao ela finalmente te entregou… Seu avo prometeu que o segredo so seria revelado quando as pecas se encaixassem. A fabrica, a carta e o incendio nao foram acidente.”",
    choices: [
      { text: "Abrir o diario na pagina marcada", next: "diario" },
      { text: "Perguntar o que ele sabe do incendio", next: "incendio" }
    ]
  },

  fabrica: {
    narrative: "A Fabrica Aurora era oficialmente uma industria textil. Mas quem trabalhou la conta outra historia.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    sceneText: "“Eles desenvolviam maquinas que ‘aprendiam sozinhas’. Seu avo era o engenheiro-chefe. Na noite do incendio, ele foi o unico que saiu carregando caixas de documentos… e nunca mais falou sobre o projeto.”",
    choices: [
      { text: "Abrir o diario na pagina marcada", next: "diario" },
      { text: "Procurar mais testemunhas", next: "testemunhas" }
    ]
  },

  padaria2: {
    narrative: "Dona Helena te recebe com um olhar de alivio. Parece que esperava por este momento ha decadas.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    sceneText: "“Seu Carlos te mandou, nao foi? Entao as coisas estao se alinhando. Seu avo disse que quando o neto ajudasse tanto a padaria quanto a oficina, o ciclo se fecharia.”",
    choices: [
      { text: "Abrir o diario na pagina marcada", next: "diario" },
      { text: "Perguntar sobre o ciclo", next: "ciclo" }
    ]
  },

  testemunhas: {
    narrative: "Voce encontra tres pessoas que trabalharam na Fabrica Aurora. Todas contam a mesma versao, com detalhes diferentes.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    sceneText: "O projeto nao era sobre tecidos. Era sobre uma maquina capaz de prever padroes humanos. Seu avo descobriu algo perigoso demais… e preferiu apagar os rastros no fogo.",
    choices: [
      { text: "Ler a ultima entrada do diario", next: "diario" }
    ]
  },

  incendio: {
    narrative: "Seu Carlos baixa a voz, mesmo estando sozinho na oficina.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
    sceneText: "“O fogo comecou no laboratorio. Seu avo gritou para todos sairem. Depois voltou sozinho e trancou a porta. Quando os bombeiros chegaram, so restavam cinzas e ele… com o diario debaixo do braco.”",
    choices: [
      { text: "Ler a ultima entrada do diario", next: "diario" }
    ]
  },

  ciclo: {
    narrative: "Dona Helena segura suas maos com carinho.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    sceneText: "“Seu avo acreditava que o conhecimento so deveria voltar quando alguem da familia demonstrasse empatia suficiente. Ajudar pessoas diferentes, sem interesse… era o teste. Voce passou.”",
    choices: [
      { text: "Ler a ultima entrada do diario", next: "diario" }
    ]
  },

  diario: {
    narrative: "Voce abre o diario na pagina marcada com uma fita vermelha. A letra do seu avo esta tremula, mas determinada.",
    image: "https://images.unsplash.com/photo-1456513080880-7d93aaa2ba29?w=800&q=80",
    sceneText: "“Se voce esta lendo isto, significa que ajudou pessoas cujas vidas eu toquei em 1987. A Fabrica Aurora nao fabricava tecidos. Criavamos o prototipo de uma inteligencia que aprendia com o comportamento humano. Eu vi o perigo. Por isso queimei o laboratorio. Mas guardei o essencial: a ideia de que a tecnologia so deve existir se servir as pessoas… nunca o contrario. Agora o segredo e seu.”",
    choices: [
      { text: "Aceitar o legado do avo", next: "final" }
    ]
  },

  final: {
    narrative: "O diario se fecha. Pela primeira vez, todas as pecas se encaixam.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    sceneText: "As pessoas que voce ajudou nao eram coincidencias. Seu avo preparou o caminho decadas atras. O verdadeiro segredo nao era a maquina… era a prova de que voce escolheria o lado humano. O legado agora e seu.",
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
  imageEl.alt = "Cena da historia";
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
    finalBox.innerHTML = `<strong>Fim da aventura.</strong><br>O segredo do avo foi revelado.`;
    choicesEl.appendChild(finalBox);

    const restart = document.createElement("button");
    restart.className = "restart-btn visible";
    restart.textContent = "Recomecar a historia";
    restart.addEventListener("click", () => renderScene("start"));
    choicesEl.appendChild(restart);
  }
}

renderScene("start");