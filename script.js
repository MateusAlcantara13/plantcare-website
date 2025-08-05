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
let carouselLargura = 0;
let isAutoPlaying = true;
let autoPlayInterval;
let resizeTimeout;

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
  inicializarMenuMobile();
  
  // Debug inicial após 1 segundo
  setTimeout(() => {
    debugCarousel();
  }, 1000);
});

// ==== MENU MOBILE ====
function inicializarMenuMobile() {
  const menuHamburger = document.querySelector('.menu-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuHamburger && navMenu) {
    menuHamburger.addEventListener('click', function() {
      menuHamburger.classList.toggle('ativo');
      navMenu.classList.toggle('ativo');
      console.log('📱 Menu mobile toggled');
    });

    // Fechar menu ao clicar em um link
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuHamburger.classList.remove('ativo');
        navMenu.classList.remove('ativo');
        console.log('📱 Menu mobile fechado');
      });
    });
  }
}

// ==== FUNÇÃO PARA EXIBIR PLANTAS ====
function inicializarPlantas() {
  const container = document.getElementById("grade-plantas");
  if (!container) {
    console.warn('⚠️ Container grade-plantas não encontrado');
    return;
  }
  
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
          ${planta.dificuldade.charAt(0).toUpperCase() + planta.dificuldade.slice(1)}
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
  
  console.log(`🌿 ${plantas_filtradas.length} plantas carregadas`);
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
  
  console.log(`🔍 ${botoesFiltro.length} filtros inicializados`);
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
  if (!container) return;
  
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

  if (!modal || !botaoFechar) {
    console.warn('⚠️ Elementos do modal não encontrados');
    return;
  }

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
  
  console.log('📱 Modal inicializado');
}

function abrirModal(planta) {
  console.log(`📱 Abrindo modal para: ${planta.nome}`);

  const modal = document.getElementById("modal-planta");
  const titulo = document.getElementById("modal-titulo");
  const emoji = document.getElementById("modal-emoji");
  const descricao = document.getElementById("modal-descricao");
  const cuidados = document.getElementById("modal-cuidados");

  if (!modal || !titulo || !emoji || !descricao || !cuidados) {
    console.error('❌ Elementos do modal não encontrados');
    return;
  }

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
  if (!modal) return;
  
  modal.classList.remove("ativo");
  document.body.style.overflow = "auto"; // Restaurar scroll
  console.log('📱 Modal fechado');
}

// ==== CALCULADORA DE REGA ====
function inicializarCalculadora() {
  const tipoPlanta = document.getElementById("tipo-planta");
  const tamanhoVaso = document.getElementById("tamanho-vaso");
  const ambiente = document.getElementById("ambiente");

  if (!tipoPlanta || !tamanhoVaso || !ambiente) {
    console.warn('⚠️ Elementos da calculadora não encontrados');
    return;
  }

  // Adicionar listeners para todos os campos
  [tipoPlanta, tamanhoVaso, ambiente].forEach((campo) => {
    campo.addEventListener("change", calcularRega);
    campo.addEventListener("input", calcularRega);
  });
  
  console.log('🧮 Calculadora de rega inicializada');
}

function calcularRega() {
  const tipo = document.getElementById("tipo-planta")?.value;
  const tamanho = parseInt(document.getElementById("tamanho-vaso")?.value);
  const ambiente = document.getElementById("ambiente")?.value;
  const resultado = document.getElementById("resultado-rega");

  if (!resultado) return;

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
      default:
        frequencia = "5-7 dias";
        quantidade = "100ml";
    }

    resultado.innerHTML = `
      <strong>🚿 ${quantidade}</strong> a cada <strong>${frequencia}</strong><br>
      <small>💡 Sempre verifique o solo antes!</small>
    `;
    
    console.log(`🧮 Cálculo realizado: ${quantidade} a cada ${frequencia}`);
  }, 1000);
}

// ========================================== //
// CAROUSEL DE DICAS - VERSÃO CORRIGIDA     //
// ========================================== //

function inicializarCarousel() {
  console.log('🎠 Inicializando carousel corrigido...');
  
  // Verificar se elementos existem
  const carousel = document.querySelector('.carousel');
  const slidesContainer = document.getElementById('slides-dicas');
  
  if (!carousel || !slidesContainer) {
    console.error('❌ Elementos do carousel não encontrados');
    return;
  }
  
  criarSlides();
  criarIndicadores();
  calcularLarguraCarousel();
  
  // Botões de navegação
  const btnAnterior = document.getElementById("anterior");
  const btnProximo = document.getElementById("proximo");
  
  if (btnAnterior && btnProximo) {
    btnAnterior.addEventListener("click", () => {
      console.log('🎠 Botão anterior clicado');
      pararAutoPlay();
      mudarSlide(-1);
      reiniciarAutoPlay();
    });
    
    btnProximo.addEventListener("click", () => {
      console.log('🎠 Botão próximo clicado');
      pararAutoPlay();
      mudarSlide(1);
      reiniciarAutoPlay();
    });
  }

  // Recalcular largura no resize com debounce otimizado
  window.addEventListener('resize', debounce(() => {
    console.log('📐 Redimensionando carousel...');
    calcularLarguraCarousel();
    atualizarCarousel();
  }, 250));

  // Pausar auto-play quando usuário interage
  if (carousel) {
    carousel.addEventListener('mouseenter', () => {
      console.log('🎠 Mouse over - pausando auto-play');
      pararAutoPlay();
    });
    
    carousel.addEventListener('mouseleave', () => {
      console.log('🎠 Mouse leave - reiniciando auto-play');
      reiniciarAutoPlay();
    });
  }

  // Navegação por teclado
  document.addEventListener('keydown', (e) => {
    if (document.activeElement && document.activeElement.closest('.carousel')) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        mudarSlide(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        mudarSlide(1);
      }
    }
  });

  // Auto-play inicial
  iniciarAutoPlay();
  
  console.log('✅ Carousel inicializado com sucesso');
}

// CALCULAR LARGURA DO CAROUSEL DINAMICAMENTE
function calcularLarguraCarousel() {
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const larguraAnterior = carouselLargura;
    carouselLargura = carousel.offsetWidth;
    
    if (larguraAnterior !== carouselLargura) {
      console.log(`📏 Largura do carousel atualizada: ${larguraAnterior}px → ${carouselLargura}px`);
    }
  }
}

// CRIAR SLIDES DINAMICAMENTE
function criarSlides() {
  const container = document.getElementById("slides-dicas");
  if (!container) {
    console.error('❌ Container slides-dicas não encontrado');
    return;
  }
  
  container.innerHTML = "";

  dicas.forEach((dica, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
      <h3>${dica.titulo}</h3>
      <p>${dica.conteudo}</p>
    `;
    
    // Adicionar identificadores para debug e acessibilidade
    slide.setAttribute('data-slide', index);
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-label', `Slide ${index + 1} de ${dicas.length}`);
    
    container.appendChild(slide);
  });
  
  console.log(`📑 ${dicas.length} slides criados`);
}

// CRIAR INDICADORES COM ACESSIBILIDADE MELHORADA
function criarIndicadores() {
  const container = document.getElementById("indicadores");
  if (!container) {
    console.error('❌ Container indicadores não encontrado');
    return;
  }
  
  container.innerHTML = "";

  dicas.forEach((_, index) => {
    const indicador = document.createElement("div");
    indicador.className = "indicador";
    if (index === 0) indicador.classList.add("ativo");

    // Evento de clique
    indicador.addEventListener("click", () => {
      console.log(`🔘 Indicador ${index + 1} clicado`);
      pararAutoPlay();
      irParaSlide(index);
      reiniciarAutoPlay();
    });
    
    // Melhor acessibilidade
    indicador.setAttribute('role', 'button');
    indicador.setAttribute('aria-label', `Ir para slide ${index + 1}`);
    indicador.setAttribute('tabindex', '0');
    indicador.setAttribute('data-slide', index);
    
    // Navegação por teclado
    indicador.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        pararAutoPlay();
        irParaSlide(index);
        reiniciarAutoPlay();
      }
    });
    
    container.appendChild(indicador);
  });
  
  console.log(`🔘 ${dicas.length} indicadores criados`);
}

// MUDAR SLIDE
function mudarSlide(direcao) {
  const slideAnterior = slideAtual;
  slideAtual += direcao;

  // Loop infinito
  if (slideAtual >= dicas.length) slideAtual = 0;
  if (slideAtual < 0) slideAtual = dicas.length - 1;

  console.log(`🎠 Mudando slide: ${slideAnterior + 1} → ${slideAtual + 1}`);
  atualizarCarousel();
}

// IR PARA SLIDE ESPECÍFICO
function irParaSlide(index) {
  if (index >= 0 && index < dicas.length && index !== slideAtual) {
    const slideAnterior = slideAtual;
    slideAtual = index;
    console.log(`🎯 Indo para slide específico: ${slideAnterior + 1} → ${slideAtual + 1}`);
    atualizarCarousel();
  }
}

// ATUALIZAR CAROUSEL (FUNÇÃO PRINCIPAL CORRIGIDA)
function atualizarCarousel() {
  const slides = document.getElementById("slides-dicas");
  const indicadores = document.querySelectorAll(".indicador");
  
  if (!slides) {
    console.error('❌ Container slides não encontrado');
    return;
  }

  // CORREÇÃO PRINCIPAL: Usar porcentagem para responsividade total
  const offsetPercentual = -(slideAtual * 20); // 20% por slide (100% / 5 slides)
  
  // Aplicar transformação com hardware acceleration
  slides.style.transform = `translateX(${offsetPercentual}%) translateZ(0)`;

  // Atualizar indicadores
  indicadores.forEach((indicador, index) => {
    const isAtivo = index === slideAtual;
    indicador.classList.toggle("ativo", isAtivo);
    indicador.setAttribute('aria-pressed', isAtivo);
    indicador.setAttribute('aria-current', isAtivo ? 'true' : 'false');
  });
  
  // Debug detalhado
  console.log(`🎠 Carousel atualizado:`, {
    slideAtual: slideAtual + 1,
    totalSlides: dicas.length,
    offsetPercentual: `${offsetPercentual}%`,
    transform: slides.style.transform,
    carouselLargura: carouselLargura + 'px'
  });
}

// AUTO-PLAY FUNCTIONS MELHORADAS
function iniciarAutoPlay() {
  if (isAutoPlaying && !autoPlayInterval) {
    autoPlayInterval = setInterval(() => {
      mudarSlide(1);
    }, 5000);
    console.log('▶️ Auto-play iniciado (5s)');
  }
}

function pararAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
    console.log('⏸️ Auto-play pausado');
  }
}

function reiniciarAutoPlay() {
  // Aguarda 3 segundos após interação antes de reiniciar
  setTimeout(() => {
    if (isAutoPlaying && !autoPlayInterval) {
      iniciarAutoPlay();
    }
  }, 3000);
}

function toggleAutoPlay() {
  isAutoPlaying = !isAutoPlaying;
  if (isAutoPlaying) {
    iniciarAutoPlay();
  } else {
    pararAutoPlay();
  }
  console.log(`⏯️ Auto-play ${isAutoPlaying ? 'ativado' : 'desativado'}`);
  return isAutoPlaying;
}

// ==== FUNÇÕES DE DEBUG AVANÇADAS ====
function debugCarousel() {
  const carousel = document.querySelector('.carousel');
  const slides = document.getElementById('slides-dicas');
  
  if (!carousel || !slides) {
    console.error('❌ Elementos do carousel não encontrados para debug');
    return null;
  }
  
  const debugInfo = {
    slideAtual: slideAtual + 1,
    totalSlides: dicas.length,
    carouselDimensions: {
      width: carousel.offsetWidth,
      height: carousel.offsetHeight,
      scrollWidth: carousel.scrollWidth,
      clientWidth: carousel.clientWidth
    },
    slidesDimensions: {
      width: slides.offsetWidth,
      scrollWidth: slides.scrollWidth,
      transform: slides.style.transform
    },
    computedStyles: {
      maxWidth: getComputedStyle(carousel).maxWidth,
      margin: getComputedStyle(carousel).margin,
      display: getComputedStyle(carousel).display,
      position: getComputedStyle(carousel).position,
      overflow: getComputedStyle(carousel).overflow
    },
    responsive: {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isMobile: window.innerWidth <= 768,
      isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
      isDesktop: window.innerWidth > 1024
    },
    autoPlay: {
      isActive: isAutoPlaying,
      intervalActive: !!autoPlayInterval
    },
    centerCheck: {
      carouselLeft: carousel.offsetLeft,
      carouselCenter: carousel.offsetLeft + (carousel.offsetWidth / 2),
      windowCenter: window.innerWidth / 2,
      isCentered: Math.abs((carousel.offsetLeft + (carousel.offsetWidth / 2)) - (window.innerWidth / 2)) < 10
    }
  };
  
  console.log('🔍 DEBUG CAROUSEL COMPLETO:', debugInfo);
  return debugInfo;
}

function testarResponsividade() {
  const breakpoints = [320, 480, 768, 1024, 1200, 1400];
  console.log('📱 === TESTE DE RESPONSIVIDADE COMPLETO ===');
  
  breakpoints.forEach((width, index) => {
    setTimeout(() => {
      console.log(`📐 Testando largura: ${width}px`);
      
      // Simular mudança de viewport (apenas para logs)
      const simulatedInfo = {
        width: width,
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1024,
        isDesktop: width > 1024,
        expectedMaxWidth: width <= 768 ? '100%' : width <= 1024 ? '1000px' : '1200px'
      };
      
      console.log(`📊 Simulação ${width}px:`, simulatedInfo);
      
      // Força recálculo na largura atual
      calcularLarguraCarousel();
      atualizarCarousel();
      
      const currentDebug = debugCarousel();
      if (currentDebug) {
        console.log(`📋 Estado atual em ${width}px:`, {
          carouselWidth: currentDebug.carouselDimensions.width,
          maxWidth: currentDebug.computedStyles.maxWidth,
          isCentered: currentDebug.centerCheck.isCentered
        });
      }
      
    }, index * 1500);
  });
}

function aplicarCorrecaoCSS() {
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    // Aplicar correções via JavaScript como fallback
    carousel.style.maxWidth = '1200px';
    carousel.style.margin = '0 auto';
    carousel.style.display = 'block';
    carousel.style.boxSizing = 'border-box';
    
    console.log('✅ Correções CSS aplicadas via JavaScript como fallback');
    
    // Recalcular após aplicar correções
    setTimeout(() => {
      calcularLarguraCarousel();
      atualizarCarousel();
      debugCarousel();
    }, 100);
  }
}

// ==== ANIMAÇÕES DE SCROLL ====
function inicializarAnimacoes() {
  const elementos = document.querySelectorAll(".aparecer");

  // Verificar se Intersection Observer é suportado
  if (!('IntersectionObserver' in window)) {
    // Fallback para navegadores antigos
    elementos.forEach(elemento => elemento.classList.add('visivel'));
    console.log('⚠️ IntersectionObserver não suportado, usando fallback');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
          console.log('✨ Elemento apareceu:', entry.target.className);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  elementos.forEach((elemento) => observer.observe(elemento));
  console.log(`✨ ${elementos.length} elementos com animação de scroll inicializados`);
}

// ==== UTILITÁRIOS ====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
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
      console.log(`🔗 Navegação suave para: ${this.getAttribute("href")}`);
    }
  });
});

// ==== EFEITO DO HEADER NO SCROLL ====
window.addEventListener("scroll", throttle(() => {
  const header = document.querySelector("header");
  
  if (!header) return;

  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
}, 100));

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
  console.log('🎮 Konami Code ativado!');
  
  // Easter egg: modo noturno temporário
  document.body.style.filter = "hue-rotate(180deg)";
  
  // Parar auto-play e mostrar debug
  pararAutoPlay();
  
  // Adicionar classe debug ao carousel
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.classList.add('carousel-debug');
  }

  setTimeout(() => {
    document.body.style.filter = "none";
    if (carousel) {
      carousel.classList.remove('carousel-debug');
    }
    alert("🌙 Você descobriu o modo noturno secreto! ✨\n\nDebug mode ativado temporariamente!");
    reiniciarAutoPlay();
  }, 3000);
}

// ==== FUNÇÕES GLOBAIS PARA DEBUG NO CONSOLE ====
// Estas funções ficam disponíveis no console para debug manual
window.debugCarousel = debugCarousel;
window.testarResponsividade = testarResponsividade;
window.aplicarCorrecaoCSS = aplicarCorrecaoCSS;
window.toggleAutoPlay = toggleAutoPlay;
window.irParaSlide = irParaSlide;
window.mudarSlide = mudarSlide;

// Função para debug rápido
window.debugRapido = function() {
  console.log('🚀 === DEBUG RÁPIDO ===');
  const carousel = document.querySelector('.carousel');
  const slides = document.getElementById('slides-dicas');
  
  if (!carousel || !slides) {
    console.error('❌ Carousel não encontrado');
    return false;
  }
  
  console.log('📊 Status Básico:', {
    slideAtual: slideAtual + 1,
    larguraCarousel: carousel.offsetWidth + 'px',
    maxWidth: getComputedStyle(carousel).maxWidth,
    margin: getComputedStyle(carousel).margin,
    centralized: carousel.offsetLeft > 0,
    autoPlay: isAutoPlaying
  });
  
  return true;
};

// Função para forçar centralização
window.forcarCentralizacao = function() {
  console.log('🎯 Forçando centralização...');
  
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    // Aplicar estilos de centralização
    carousel.style.maxWidth = '1200px';
    carousel.style.margin = '0 auto';
    carousel.style.display = 'block';
    carousel.style.width = '100%';
    
    // Recalcular
    calcularLarguraCarousel();
    atualizarCarousel();
    
    console.log('✅ Centralização forçada aplicada');
    return debugCarousel();
  }
  
  console.error('❌ Carousel não encontrado');
  return false;
};

// ==== MONITORAMENTO DE PERFORMANCE ====
let performanceMetrics = {
  slideChanges: 0,
  lastSlideChange: 0,
  autoPlayCycles: 0
};

function monitorarPerformance() {
  performanceMetrics.slideChanges++;
  performanceMetrics.lastSlideChange = Date.now();
  
  // Log de performance a cada 10 mudanças
  if (performanceMetrics.slideChanges % 10 === 0) {
    console.log('📊 Performance Metrics:', {
      totalSlideChanges: performanceMetrics.slideChanges,
      autoPlayCycles: performanceMetrics.autoPlayCycles,
      averageTime: 'N/A' // Poderia calcular tempo médio entre mudanças
    });
  }
}

// Modificar função de mudança de slide para incluir monitoramento
const mudarSlideOriginal = mudarSlide;
mudarSlide = function(direcao) {
  monitorarPerformance();
  return mudarSlideOriginal(direcao);
};

// ==== DETECÇÃO DE MUDANÇAS DE ORIENTAÇÃO ====
window.addEventListener('orientationchange', debounce(() => {
  console.log('📱 Orientação alterada, recalculando carousel...');
  setTimeout(() => {
    calcularLarguraCarousel();
    atualizarCarousel();
  }, 500); // Aguarda finalizar rotação
}, 100));

// ==== DETECÇÃO DE VISIBILIDADE DA PÁGINA ====
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('👁️ Página oculta - pausando auto-play');
    pararAutoPlay();
  } else {
    console.log('👁️ Página visível - reiniciando auto-play');
    if (isAutoPlaying) {
      setTimeout(iniciarAutoPlay, 1000);
    }
  }
});

// ==== TRATAMENTO DE ERROS GLOBAIS ====
window.addEventListener('error', (e) => {
  if (e.message.includes('carousel') || e.filename.includes('script')) {
    console.error('🚨 Erro no carousel:', {
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno
    });
  }
});

// ==== INICIALIZAÇÃO DE FALLBACKS ====
function verificarSuporte() {
  const suporte = {
    flexbox: CSS.supports('display', 'flex'),
    transform: CSS.supports('transform', 'translateX(0)'),
    transition: CSS.supports('transition', 'transform 0.3s'),
    intersectionObserver: 'IntersectionObserver' in window
  };
  
  console.log('🔧 Suporte do navegador:', suporte);
  
  // Aplicar fallbacks se necessário
  if (!suporte.flexbox) {
    console.warn('⚠️ Flexbox não suportado, aplicando fallback');
    // Aplicar fallback para browsers antigos
  }
  
  if (!suporte.transform) {
    console.warn('⚠️ Transform não suportado, aplicando fallback');
    // Usar left/margin em vez de transform
  }
  
  return suporte;
}

// ==== LOG DE DEBUG FINAL ====
console.log('🎠 === PLANTCARE CAROUSEL v2.0 CARREGADO ===');
console.log('📊 Plantas disponíveis:', plantas.length);
console.log('💡 Dicas disponíveis:', dicas.length);
console.log('🎯 Carousel corrigido e centralizado');
console.log('📱 Responsividade total implementada');
console.log('🔧 Debug tools disponíveis no console:');
console.log('   - debugCarousel()');
console.log('   - testarResponsividade()');
console.log('   - aplicarCorrecaoCSS()');
console.log('   - toggleAutoPlay()');
console.log('   - debugRapido()');
console.log('   - forcarCentralizacao()');
console.log('✨ Todas as funcionalidades ativas!');

// Verificar suporte do navegador na inicialização
verificarSuporte();