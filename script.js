// ==== DADOS DAS PLANTAS ====
const plantas = [
  {
    nome: "Suculenta Jade",
    emoji: "🪴",
    dificuldade: "facil",
    agua: "💧",
    luz: "☀️",
    descricao:
      "Planta resistente e fácil de cuidar, perfeita para iniciantes. Cresce lentamente e purifica o ar.",
    cuidados: [
      "💧 Regue apenas quando o solo estiver seco",
      "☀️ Luz indireta brilhante",
      "🌡️ Temperatura entre 18-24°C",
      "✂️ Pode as folhas danificadas",
      "🏺 Replante a cada 2 anos",
    ],
  },
  {
    nome: "Monstera Deliciosa",
    emoji: "🌿",
    dificuldade: "medio",
    agua: "💧💧",
    luz: "🌤️",
    descricao:
      "Planta tropical com folhas fenestradas únicas. Cresce rapidamente e é muito decorativa.",
    cuidados: [
      "💧 Regue 1-2 vezes por semana",
      "🌤️ Luz indireta média a brilhante",
      "💨 Ambiente bem ventilado",
      "🌫️ Borrife as folhas regularmente",
      "🪜 Ofereça suporte para crescer",
    ],
  },
  {
    nome: "Orquídea Phalaenopsis",
    emoji: "🌺",
    dificuldade: "dificil",
    agua: "💧",
    luz: "🌤️",
    descricao:
      "Flor exótica e elegante que requer cuidados específicos. Florescimento pode durar meses.",
    cuidados: [
      "💧 Regue com cubos de gelo semanalmente",
      "🌤️ Luz indireta filtrada",
      "🌬️ Boa circulação de ar",
      "🍯 Fertilize mensalmente",
      "🏺 Substrato específico para orquídeas",
    ],
  },
  {
    nome: "Cacto Mandacaru",
    emoji: "🌵",
    dificuldade: "facil",
    agua: "💧",
    luz: "☀️",
    descricao:
      "Cacto resistente que aguenta longos períodos sem água. Ideal para ambientes ensolarados.",
    cuidados: [
      "💧 Regue apenas no verão",
      "☀️ Sol direto várias horas por dia",
      "🏺 Solo bem drenado",
      "❄️ Proteja do frio intenso",
      "🧤 Use luvas ao manusear",
    ],
  },
  {
    nome: "Violeta Africana",
    emoji: "💜",
    dificuldade: "medio",
    agua: "💧💧",
    luz: "🌤️",
    descricao:
      "Planta com flores delicadas e coloridas. Floresce várias vezes ao ano com cuidados adequados.",
    cuidados: [
      "💧 Regue por baixo do vaso",
      "🌤️ Luz indireta brilhante",
      "🌡️ Temperatura constante 18-22°C",
      "💨 Evite correntes de ar",
      "🌸 Remova flores murchas",
    ],
  },
  {
    nome: "Samambaia Boston",
    emoji: "🌿",
    dificuldade: "medio",
    agua: "💧💧💧",
    luz: "🌤️",
    descricao:
      "Planta pendente perfeita para vasos suspensos. Purifica o ar e traz frescor ao ambiente.",
    cuidados: [
      "💧 Mantenha o solo sempre úmido",
      "🌤️ Luz indireta filtrada",
      "🌫️ Alta umidade do ar",
      "✂️ Corte folhas amareladas",
      "🚿 Banho semanal nas folhas",
    ],
  },
];

// ==== DADOS DAS DICAS ====
const dicas = [
  {
    titulo: "🌱 Dica #1: Solo Drenante",
    conteudo:
      "Um bom solo deve drenar bem para evitar o apodrecimento das raízes. Misture terra comum com areia e cascalho para melhorar a drenagem. Suas plantas vão agradecer!",
  },
  {
    titulo: "💧 Dica #2: Teste do Dedo",
    conteudo:
      "Antes de regar, enfie o dedo no solo até uns 3cm de profundidade. Se estiver seco, é hora de regar. Se ainda estiver úmido, espere mais alguns dias.",
  },
  {
    titulo: "☀️ Dica #3: Rotação da Luz",
    conteudo:
      "Gire suas plantas uma vez por semana para que todos os lados recebam luz uniformemente. Isso evita que ela cresça torta em direção à janela.",
  },
  {
    titulo: "🌿 Dica #4: Limpeza das Folhas",
    conteudo:
      "Limpe as folhas com um pano úmido regularmente. Folhas limpas fazem fotossíntese melhor e sua planta fica mais bonita e saudável.",
  },
  {
    titulo: "🏺 Dica #5: Replante na Hora Certa",
    conteudo:
      "Quando as raízes começarem a sair pelos furos do vaso, é hora de replantar. Faça isso preferencialmente na primavera.",
  },
];

// ==== VARIÁVEIS GLOBAIS ====
let slideAtual = 0;
let plantas_filtradas = [...plantas];

// ==== INICIALIZAÇÃO DA PÁGINA ====
document.addEventListener("DOMContentLoaded", function () {
  console.log("🌱 PlantCare carregado com sucesso!");

  // Inicializar todas as funcionalidades
  inicializarPlantas();
  inicializarCalculadora();
  inicializarCarousel();
  inicializarAnimacoes();
  inicializarFiltros();
  inicializarModal();
});

// ==== FUNÇÃO PARA EXIBIR PLANTAS ====
function inicializarPlantas() {
  const container = document.getElementById("grade-plantas");
  container.innerHTML = ""; // Limpar container

  plantas_filtradas.forEach((planta, index) => {
    const card = document.createElement("div");
    card.className = "card-planta";
    card.setAttribute("data-dificuldade", planta.dificuldade);

    // HTML do card da planta
    card.innerHTML = `
                    <div class="imagem-planta">
                        ${planta.emoji}
                    </div>
                    <div class="conteudo-planta">
                        <h3>${planta.nome}</h3>
                        <span class="dificuldade ${planta.dificuldade}">
                            ${
                              planta.dificuldade.charAt(0).toUpperCase() +
                              planta.dificuldade.slice(1)
                            }
                        </span>
                        <p>${planta.descricao}</p>
                        <div class="info-planta">
                            <div class="info-item">
                                ${planta.agua} Água
                            </div>
                            <div class="info-item">
                                ${planta.luz} Luz
                            </div>
                        </div>
                    </div>
                `;

    // Adicionar evento de clique para abrir modal
    card.addEventListener("click", () => abrirModal(planta));

    // Animação de entrada escalonada
    card.style.animationDelay = `${index * 0.1}s`;

    container.appendChild(card);
  });
}

// ==== SISTEMA DE FILTROS ====
function inicializarFiltros() {
  const botoesFiltro = document.querySelectorAll(".filtro-btn");

  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
      // Remover classe ativo de todos os botões
      botoesFiltro.forEach((b) => b.classList.remove("ativo"));

      // Adicionar classe ativo no botão clicado
      botao.classList.add("ativo");

      const filtro = botao.getAttribute("data-filtro");
      filtrarPlantas(filtro);
    });
  });
}

function filtrarPlantas(filtro) {
  console.log(`🔍 Filtrando por: ${filtro}`);

  if (filtro === "todas") {
    plantas_filtradas = [...plantas];
  } else {
    plantas_filtradas = plantas.filter(
      (planta) => planta.dificuldade === filtro
    );
  }

  // Animar saída e entrada das plantas
  const container = document.getElementById("grade-plantas");
  container.style.opacity = "0.5";
  container.style.transform = "translateY(20px)";

  setTimeout(() => {
    inicializarPlantas();
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  }, 300);
}

// ==== SISTEMA DE MODAL ====
function inicializarModal() {
  const modal = document.getElementById("modal-planta");
  const botaoFechar = document.getElementById("fechar-modal");

  // Fechar modal ao clicar no X
  botaoFechar.addEventListener("click", fecharModal);

  // Fechar modal ao clicar fora do conteúdo
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fecharModal();
    }
  });

  // Fechar modal com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("ativo")) {
      fecharModal();
    }
  });
}

function abrirModal(planta) {
  console.log(`📱 Abrindo modal para: ${planta.nome}`);

  const modal = document.getElementById("modal-planta");
  const titulo = document.getElementById("modal-titulo");
  const emoji = document.getElementById("modal-emoji");
  const descricao = document.getElementById("modal-descricao");
  const cuidados = document.getElementById("modal-cuidados");

  // Preencher dados do modal
  titulo.textContent = planta.nome;
  emoji.textContent = planta.emoji;
  descricao.textContent = planta.descricao;

  // Limpar e preencher lista de cuidados
  cuidados.innerHTML = "";
  planta.cuidados.forEach((cuidado) => {
    const li = document.createElement("li");
    li.textContent = cuidado;
    cuidados.appendChild(li);
  });

  // Mostrar modal com animação
  modal.classList.add("ativo");
  document.body.style.overflow = "hidden"; // Prevenir scroll
}

function fecharModal() {
  const modal = document.getElementById("modal-planta");
  modal.classList.remove("ativo");
  document.body.style.overflow = "auto"; // Restaurar scroll
}

// ==== CALCULADORA DE REGA ====
function inicializarCalculadora() {
  const tipoPlanta = document.getElementById("tipo-planta");
  const tamanhoVaso = document.getElementById("tamanho-vaso");
  const ambiente = document.getElementById("ambiente");
  const resultado = document.getElementById("resultado-rega");

  // Adicionar listeners para todos os campos
  [tipoPlanta, tamanhoVaso, ambiente].forEach((campo) => {
    campo.addEventListener("change", calcularRega);
    campo.addEventListener("input", calcularRega);
  });
}

function calcularRega() {
  const tipo = document.getElementById("tipo-planta").value;
  const tamanho = parseInt(document.getElementById("tamanho-vaso").value);
  const ambiente = document.getElementById("ambiente").value;
  const resultado = document.getElementById("resultado-rega");

  // Verificar se todos os campos estão preenchidos
  if (!tipo || !tamanho || !ambiente) {
    resultado.innerHTML = "Preencha todos os campos para calcular! 🌱";
    return;
  }

  // Mostrar loading temporariamente
  resultado.innerHTML = '<span class="loading"></span> Calculando...';

  setTimeout(() => {
    let frequencia = "";
    let quantidade = "";

    // Lógica de cálculo baseada no tipo de planta
    switch (tipo) {
      case "suculenta":
        frequencia = ambiente === "externo" ? "10-14 dias" : "14-21 dias";
        quantidade = tamanho < 15 ? "50ml" : "100ml";
        break;
      case "tropical":
        frequencia = ambiente === "externo" ? "3-4 dias" : "5-7 dias";
        quantidade = tamanho < 15 ? "100ml" : "200ml";
        break;
      case "cacto":
        frequencia = ambiente === "externo" ? "14-21 dias" : "21-30 dias";
        quantidade = tamanho < 15 ? "30ml" : "50ml";
        break;
      case "fruteira":
        frequencia = ambiente === "externo" ? "2-3 dias" : "3-5 dias";
        quantidade = tamanho < 15 ? "150ml" : "300ml";
        break;
      case "flor":
        frequencia = ambiente === "externo" ? "2-3 dias" : "4-6 dias";
        quantidade = tamanho < 15 ? "80ml" : "150ml";
        break;
    }

    resultado.innerHTML = `
                    <strong>🚿 ${quantidade}</strong> a cada <strong>${frequencia}</strong><br>
                    <small>💡 Sempre verifique o solo antes!</small>
                `;
  }, 1000); // Simular tempo de processamento
}

// ==== CAROUSEL DE DICAS ====
function inicializarCarousel() {
  criarSlides();
  criarIndicadores();

  // Botões de navegação
  document
    .getElementById("anterior")
    .addEventListener("click", () => mudarSlide(-1));
  document
    .getElementById("proximo")
    .addEventListener("click", () => mudarSlide(1));

  // Auto-play do carousel
  setInterval(() => mudarSlide(1), 5000);
}

function criarSlides() {
  const container = document.getElementById("slides-dicas");
  container.innerHTML = "";

  dicas.forEach((dica) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
                    <h3>${dica.titulo}</h3>
                    <p>${dica.conteudo}</p>
                `;
    container.appendChild(slide);
  });
}

function criarIndicadores() {
  const container = document.getElementById("indicadores");
  container.innerHTML = "";

  dicas.forEach((_, index) => {
    const indicador = document.createElement("div");
    indicador.className = "indicador";
    if (index === 0) indicador.classList.add("ativo");

    indicador.addEventListener("click", () => irParaSlide(index));
    container.appendChild(indicador);
  });
}

function mudarSlide(direcao) {
  slideAtual += direcao;

  // Loop infinito
  if (slideAtual >= dicas.length) slideAtual = 0;
  if (slideAtual < 0) slideAtual = dicas.length - 1;

  atualizarCarousel();
}

function irParaSlide(index) {
  slideAtual = index;
  atualizarCarousel();
}

function atualizarCarousel() {
  const slides = document.getElementById("slides-dicas");
  const indicadores = document.querySelectorAll(".indicador");

  // Mover slides
  slides.style.transform = `translateX(-${slideAtual * 100}%)`;

  // Atualizar indicadores
  indicadores.forEach((indicador, index) => {
    indicador.classList.toggle("ativo", index === slideAtual);
  });
}

// ==== ANIMAÇÕES DE SCROLL ====
function inicializarAnimacoes() {
  const elementos = document.querySelectorAll(".aparecer");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  elementos.forEach((elemento) => observer.observe(elemento));
}

// ==== SCROLL SUAVE PARA NAVEGAÇÃO ====
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ==== EFEITO DO HEADER NO SCROLL ====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
});

// ==== EASTER EGG - KONAMI CODE ====
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.keyCode === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      ativarModoEspecial();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function ativarModoEspecial() {
  // Easter egg: modo noturno temporário
  document.body.style.filter = "hue-rotate(180deg)";

  setTimeout(() => {
    document.body.style.filter = "none";
    alert("🌙 Você descobriu o modo noturno secreto! ✨");
  }, 3000);
}

// ==== LOG DE DEBUG ====
console.log("🌱 PlantCare v1.0");
console.log("📊 Plantas carregadas:", plantas.length);
console.log("💡 Dicas disponíveis:", dicas.length);
console.log("✨ Todas as funcionalidades ativas!");
