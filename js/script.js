// Substitua pelo seu número com DDI + DDD (ex: 5511999999999)
const WHATSAPP_NUMBER = "5581999918017";

function toggleMobileMenu() {
  document.getElementById("mobileDrawer").classList.toggle("open");
}

// Filtro do Catálogo
function filterCatalog(category, btn) {
  document.querySelectorAll("#catalogTabs .tab-btn").forEach((b) => {
    b.classList.remove("active");
  });
  btn.classList.add("active");

  const cards = document.querySelectorAll("#catalogGrid .catalog-card");
  cards.forEach((card) => {
    if (category === "todos" || card.dataset.cat === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// Conteúdo dos Tutoriais
const tutorialsData = {
  smarttv: {
    title: "Configuração em Smart TV",
    steps: [
      "<strong>1. Abra a loja de aplicativos:</strong> Acesse a loja oficial da sua TV (Samsung Apps, LG Content Store ou Google Play).",
      "<strong>2. Baixe o player recomendado:</strong> Procure por aplicativos compatíveis como IPTV Smarters Pro, Duplex ou IBO Player.",
      "<strong>3. Insira seus dados:</strong> Solicite seu teste de 3h na LeoTV e digite o usuário, senha e URL do servidor enviados pelo suporte."
    ],
    tip: "A equipe LeoTV configura sua Smart TV passo a passo pelo WhatsApp em menos de 5 minutos, sem custo adicional."
  },
  tvbox: {
    title: "Configuração em TV Box e Fire Stick",
    steps: [
      "<strong>1. Instale o aplicativo:</strong> Na Play Store ou via Downloader (Fire Stick), instale o XCIPTV Player ou IPTV Smarters.",
      "<strong>2. Selecione Login Xtream Codes:</strong> Abra o app e escolha a opção de acesso via Xtream Codes API.",
      "<strong>3. Aproveite em 4K:</strong> Cole as credenciais liberadas no teste de 3 horas e carregue todos os canais e VOD."
    ],
    tip: "TV Box e Fire Stick possuem processadores dedicados e entregam a maior estabilidade para transmissões em 4K."
  },
  celular: {
    title: "Configuração no Celular (Android & iOS)",
    steps: [
      "<strong>1. Baixe na loja oficial:</strong> No Android baixe o XCIPTV ou Smarters; no iPhone baixe um player compatível na App Store.",
      "<strong>2. Faça login rápido:</strong> Insira os dados da LeoTV recebidos no seu WhatsApp após solicitar o teste.",
      "<strong>3. Assista de qualquer lugar:</strong> Use via Wi-Fi ou 4G/5G onde estiver."
    ],
    tip: "Ideal para acompanhar jogos e séries fora de casa com interface adaptada para telas touch."
  },
  internet: {
    title: "Dicas de Internet & Anti-Buffer",
    steps: [
      "<strong>1. Velocidade recomendada:</strong> Tenha pelo menos 15 Mbps estáveis para canais HD e 30 Mbps para transmissões em 4K.",
      "<strong>2. Prefira cabo ou Wi-Fi 5GHz:</strong> Se a TV estiver longe do roteador, conecte via cabo de rede ou na rede 5 GHz.",
      "<strong>3. Limpeza de cache:</strong> Caso o guia EPG demore a atualizar, atualize a lista nas configurações do player."
    ],
    tip: "Se houver qualquer oscilação, o suporte da LeoTV verifica a rota do servidor em tempo real pelo WhatsApp."
  }
};

function showTutorial(key, btn) {
  const parent = btn.parentElement;
  parent.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const data = tutorialsData[key];
  document.getElementById("tutTitle").textContent = data.title;
  document.getElementById("tutSteps").innerHTML = data.steps.map((s) => `<li>${s}</li>`).join("");
  document.getElementById("tutTip").textContent = data.tip;
}

// FAQ Accordion
function toggleFaq(button) {
  const item = button.parentElement;
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
  if (!isOpen) item.classList.add("open");
}

// Modal Controle
function openTrialModal(interest = "Teste Grátis 3 Horas") {
  document.getElementById("userInterest").value = interest;
  document.getElementById("trialModal").classList.add("open");
}

function closeTrialModal() {
  document.getElementById("trialModal").classList.remove("open");
}

function submitWhatsAppForm(e) {
  e.preventDefault();
  const name = document.getElementById("userName").value.trim();
  const device = document.getElementById("userDevice").value;
  const interest = document.getElementById("userInterest").value;

  const msg = `Olá LeoTV! Meu nome é ${name}. Gostaria de solicitar: *${interest}*. Vou assistir no dispositivo: *${device}*.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
  closeTrialModal();
}

// Fechar modal clicando fora
document.getElementById("trialModal").addEventListener("click", function (e) {
  if (e.target === this) closeTrialModal();
});