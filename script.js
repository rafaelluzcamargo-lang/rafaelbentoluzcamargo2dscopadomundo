// ===== DATA =====
const champions = [
  { year: 1930, nation: "Uruguai", flag: "🇺🇾", titles: 2 },
  { year: 1934, nation: "Itália", flag: "🇮🇹", titles: 4 },
  { year: 1938, nation: "Itália", flag: "🇮🇹", titles: 4 },
  { year: 1950, nation: "Uruguai", flag: "🇺🇾", titles: 2 },
  { year: 1954, nation: "Alemanha Oc.", flag: "🇩🇪", titles: 4 },
  { year: 1958, nation: "Brasil", flag: "🇧🇷", titles: 5 },
  { year: 1962, nation: "Brasil", flag: "🇧🇷", titles: 5 },
  { year: 1966, nation: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", titles: 1 },
  { year: 1970, nation: "Brasil", flag: "🇧🇷", titles: 5 },
  { year: 1974, nation: "Alemanha Oc.", flag: "🇩🇪", titles: 4 },
  { year: 1978, nation: "Argentina", flag: "🇦🇷", titles: 3 },
  { year: 1982, nation: "Itália", flag: "🇮🇹", titles: 4 },
  { year: 1986, nation: "Argentina", flag: "🇦🇷", titles: 3 },
  { year: 1990, nation: "Alemanha Oc.", flag: "🇩🇪", titles: 4 },
  { year: 1994, nation: "Brasil", flag: "🇧🇷", titles: 5 },
  { year: 1998, nation: "França", flag: "🇫🇷", titles: 2 },
  { year: 2002, nation: "Brasil", flag: "🇧🇷", titles: 5 },
  { year: 2006, nation: "Itália", flag: "🇮🇹", titles: 4 },
  { year: 2010, nation: "Espanha", flag: "🇪🇸", titles: 2 },
  { year: 2014, nation: "Alemanha", flag: "🇩🇪", titles: 4 },
  { year: 2018, nation: "França", flag: "🇫🇷", titles: 2 },
  { year: 2022, nation: "Argentina", flag: "🇦🇷", titles: 3 },
  { year: 2026, nation: "Espanha", flag: "🇪🇸", titles: 2 }
];

const paths = {
  1930: {
    nation: "Uruguai", flag: "🇺🇾",
    stages: [
      { name: "Grupo", score: "1–0", opp: "Peru" },
      { name: "Grupo", score: "4–0", opp: "Romênia" },
      { name: "Semifinal", score: "6–1", opp: "Iugoslávia" },
      { name: "Final", score: "4–2", opp: "Argentina" }
    ]
  },

    1934: {
  nation: "Itália", flag: "🇮🇹",
  stages: [
    { name: "Oitavas", score: "7–1", opp: "EUA" },
    { name: "Quartas", score: "1–1 (1–0 pro)", opp: "Espanha" },
    { name: "Semifinal", score: "1–0", opp: "Áustria" },
    { name: "Final", score: "2–1 (pro)", opp: "Tchecoslováquia" }
  ]
},

  1938: {
  nation: "Itália", flag: "🇮🇹",
  stages: [
    { name: "Oitavas", score: "2–1 (pro)", opp: "Noruega" },
    { name: "Quartas", score: "3–1", opp: "França" },
    { name: "Semifinal", score: "2–1", opp: "Brasil" },
    { name: "Final", score: "4–2", opp: "Hungria" }
  ]
},
  1950: {
    nation: "Uruguai", flag: "🇺🇾",
    stages: [
      { name: "Grupo", score: "8–0", opp: "Bolívia" },
      { name: "Final Group", score: "2–2", opp: "Espanha" },
      { name: "Final Group", score: "3–2", opp: "Suécia" },
      { name: "Final Group", score: "2–1", opp: "Brasil" }
    ]
  },
  1954: {
    nation: "Alemanha Oc.", flag: "🇩🇪",
    stages: [
      { name: "Grupo", score: "4–1", opp: "Turquia" },
      { name: "Grupo", score: "3–8", opp: "Hungria" },
      { name: "Play-off", score: "7–2", opp: "Turquia" },
      { name: "Quartas", score: "2–0", opp: "Iugoslávia" },
      { name: "Semifinal", score: "6–1", opp: "Áustria" },
      { name: "Final", score: "3–2", opp: "Hungria" }
    ]
  },
  1958: {
    nation: "Brasil", flag: "🇧🇷",
    stages: [
      { name: "Grupo", score: "3–0", opp: "Áustria" },
      { name: "Grupo", score: "0–0", opp: "Inglaterra" },
      { name: "Grupo", score: "2–0", opp: "URSS" },
      { name: "Quartas", score: "1–0", opp: "País de Gales" },
      { name: "Semifinal", score: "5–2", opp: "França" },
      { name: "Final", score: "5–2", opp: "Suécia" }
    ]
  },
  1962: {
    nation: "Brasil", flag: "🇧🇷",
    stages: [
      { name: "Grupo", score: "2–0", opp: "México" },
      { name: "Grupo", score: "0–0", opp: "Tchecoslováquia" },
      { name: "Grupo", score: "2–1", opp: "Espanha" },
      { name: "Quartas", score: "3–1", opp: "Inglaterra" },
      { name: "Semifinal", score: "4–2", opp: "Chile" },
      { name: "Final", score: "3–1", opp: "Tchecoslováquia" }
    ]
  },
  1966: {
    nation: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    stages: [
      { name: "Grupo", score: "0–0", opp: "Uruguai" },
      { name: "Grupo", score: "2–0", opp: "México" },
      { name: "Grupo", score: "2–0", opp: "França" },
      { name: "Quartas", score: "1–0", opp: "Argentina" },
      { name: "Semifinal", score: "2–1", opp: "Portugal" },
      { name: "Final", score: "4–2 (pro)", opp: "Alemanha Oc." }
    ]
  },
  1970: {
    nation: "Brasil", flag: "🇧🇷",
    stages: [
      { name: "Grupo", score: "4–1", opp: "Tchecoslováquia" },
      { name: "Grupo", score: "1–0", opp: "Inglaterra" },
      { name: "Grupo", score: "3–2", opp: "Romênia" },
      { name: "Quartas", score: "4–2", opp: "Peru" },
      { name: "Semifinal", score: "3–1", opp: "Uruguai" },
      { name: "Final", score: "4–1", opp: "Itália" }
    ]
  },
  1974: {
    nation: "Alemanha Oc.", flag: "🇩🇪",
    stages: [
      { name: "Grupo", score: "1–0", opp: "Chile" },
      { name: "Grupo", score: "3–0", opp: "Austrália" },
      { name: "Grupo", score: "0–1", opp: "Alemanha Oriental" },
      { name: "2ª Fase", score: "2–0", opp: "Iugoslávia" },
      { name: "2ª Fase", score: "4–2", opp: "Suécia" },
      { name: "2ª Fase", score: "1–0", opp: "Polônia" },
      { name: "Final", score: "2–1", opp: "Holanda" }
    ]
  },
  1978: {
    nation: "Argentina", flag: "🇦🇷",
    stages: [
      { name: "Grupo", score: "2–1", opp: "Hungria" },
      { name: "Grupo", score: "2–1", opp: "França" },
      { name: "Grupo", score: "0–1", opp: "Itália" },
      { name: "2ª Fase", score: "2–0", opp: "Polônia" },
      { name: "2ª Fase", score: "0–0", opp: "Brasil" },
      { name: "2ª Fase", score: "6–0", opp: "Peru" },
      { name: "Final", score: "3–1 (pro)", opp: "Holanda" }
    ]
  },
  1982: {
    nation: "Itália", flag: "🇮🇹",
    stages: [
      { name: "Grupo", score: "0–0", opp: "Polônia" },
      { name: "Grupo", score: "1–1", opp: "Peru" },
      { name: "Grupo", score: "1–1", opp: "Camarões" },
      { name: "2ª Fase", score: "2–1", opp: "Argentina" },
      { name: "2ª Fase", score: "3–2", opp: "Brasil" },
      { name: "Semifinal", score: "2–0", opp: "Polônia" },
      { name: "Final", score: "3–1", opp: "Alemanha Oc." }
    ]
  },
  1986: {
    nation: "Argentina", flag: "🇦🇷",
    stages: [
      { name: "Grupo", score: "3–1", opp: "Coreia do Sul" },
      { name: "Grupo", score: "1–1", opp: "Itália" },
      { name: "Grupo", score: "2–0", opp: "Bulgária" },
      { name: "Oitavas", score: "1–0", opp: "Uruguai" },
      { name: "Quartas", score: "2–1", opp: "Inglaterra" },
      { name: "Semifinal", score: "2–0", opp: "Bélgica" },
      { name: "Final", score: "3–2", opp: "Alemanha Oc." }
    ]
  },
  1990: {
    nation: "Alemanha Oc.", flag: "🇩🇪",
    stages: [
      { name: "Grupo", score: "4–1", opp: "Iugoslávia" },
      { name: "Grupo", score: "5–1", opp: "Emirados Árabes" },
      { name: "Grupo", score: "1–0", opp: "Colômbia" },
      { name: "Oitavas", score: "2–1", opp: "Holanda" },
      { name: "Quartas", score: "1–0", opp: "Tchecoslováquia" },
      { name: "Semifinal", score: "1–1 (4–3 pen)", opp: "Inglaterra" },
      { name: "Final", score: "1–0", opp: "Argentina" }
    ]
  },
  1994: {
    nation: "Brasil", flag: "🇧🇷",
    stages: [
      { name: "Grupo", score: "2–0", opp: "Rússia" },
      { name: "Grupo", score: "3–0", opp: "Camarões" },
      { name: "Grupo", score: "1–1", opp: "Suécia" },
      { name: "Oitavas", score: "1–0", opp: "EUA" },
      { name: "Quartas", score: "3–2", opp: "Holanda" },
      { name: "Semifinal", score: "1–0", opp: "Suécia" },
      { name: "Final", score: "0–0 (3–2 pen)", opp: "Itália" }
    ]
  },
  1998: {
    nation: "França", flag: "🇫🇷",
    stages: [
      { name: "Grupo", score: "3–0", opp: "África do Sul" },
      { name: "Grupo", score: "4–0", opp: "Arábia Saudita" },
      { name: "Grupo", score: "2–1", opp: "Dinamarca" },
      { name: "Oitavas", score: "1–0", opp: "Paraguai" },
      { name: "Quartas", score: "0–0 (4–3 pen)", opp: "Itália" },
      { name: "Semifinal", score: "2–1", opp: "Croácia" },
      { name: "Final", score: "3–0", opp: "Brasil" }
    ]
  },
  2002: {
    nation: "Brasil", flag: "🇧🇷",
    stages: [
      { name: "Grupo", score: "2–1", opp: "Turquia" },
      { name: "Grupo", score: "4–0", opp: "China" },
      { name: "Grupo", score: "5–2", opp: "Costa Rica" },
      { name: "Oitavas", score: "2–0", opp: "Bélgica" },
      { name: "Quartas", score: "2–1", opp: "Inglaterra" },
      { name: "Semifinal", score: "1–0", opp: "Turquia" },
      { name: "Final", score: "2–0", opp: "Alemanha" }
    ]
  },
  2006: {
    nation: "Itália", flag: "🇮🇹",
    stages: [
      { name: "Grupo", score: "2–0", opp: "Gana" },
      { name: "Grupo", score: "1–1", opp: "EUA" },
      { name: "Grupo", score: "2–0", opp: "Rep. Tcheca" },
      { name: "Oitavas", score: "1–0", opp: "Austrália" },
      { name: "Quartas", score: "3–0", opp: "Ucrânia" },
      { name: "Semifinal", score: "2–0 (pro)", opp: "Alemanha" },
      { name: "Final", score: "1–1 (5–3 pen)", opp: "França" }
    ]
  },
  2010: {
    nation: "Espanha", flag: "🇪🇸",
    stages: [
      { name: "Grupo", score: "0–1", opp: "Suíça" },
      { name: "Grupo", score: "2–0", opp: "Honduras" },
      { name: "Grupo", score: "2–1", opp: "Chile" },
      { name: "Oitavas", score: "1–0", opp: "Portugal" },
      { name: "Quartas", score: "1–0", opp: "Paraguai" },
      { name: "Semifinal", score: "1–0", opp: "Alemanha" },
      { name: "Final", score: "1–0 (pro)", opp: "Holanda" }
    ]
  },
  2014: {
    nation: "Alemanha", flag: "🇩🇪",
    stages: [
      { name: "Grupo", score: "4–0", opp: "Portugal" },
      { name: "Grupo", score: "2–2", opp: "Gana" },
      { name: "Grupo", score: "1–0", opp: "EUA" },
      { name: "Oitavas", score: "2–1 (pro)", opp: "Argélia" },
      { name: "Quartas", score: "1–0", opp: "França" },
      { name: "Semifinal", score: "7–1", opp: "Brasil" },
      { name: "Final", score: "1–0 (pro)", opp: "Argentina" }
    ]
  },
  2018: {
    nation: "França", flag: "🇫🇷",
    stages: [
      { name: "Grupo", score: "2–1", opp: "Austrália" },
      { name: "Grupo", score: "1–0", opp: "Peru" },
      { name: "Grupo", score: "0–0", opp: "Dinamarca" },
      { name: "Oitavas", score: "4–3", opp: "Argentina" },
      { name: "Quartas", score: "2–0", opp: "Uruguai" },
      { name: "Semifinal", score: "1–0", opp: "Bélgica" },
      { name: "Final", score: "4–2", opp: "Croácia" }
    ]
  },
  2022: {
    nation: "Argentina", flag: "🇦🇷",
    stages: [
      { name: "Grupo", score: "1–2", opp: "Arábia Saudita" },
      { name: "Grupo", score: "2–0", opp: "México" },
      { name: "Grupo", score: "2–0", opp: "Polônia" },
      { name: "Oitavas", score: "2–1", opp: "Austrália" },
      { name: "Quartas", score: "2–2 (4–3 pen)", opp: "Holanda" },
      { name: "Semifinal", score: "3–0", opp: "Croácia" },
      { name: "Final", score: "3–3 (4–2 pen)", opp: "França" }
    ]
  },
  2026: {
    nation: "Espanha", flag: "🇪🇸",
    stages: [
      { name: "Grupo", score: "3–1", opp: "Croácia" },
      { name: "Grupo", score: "1–0", opp: "Canadá" },
      { name: "Grupo", score: "2–1", opp: "Japão" },
      { name: "Oitavas de 32", score: "2–0", opp: "Suíça" },
      { name: "Oitavas", score: "1–0", opp: "Alemanha" },
      { name: "Quartas", score: "2–1", opp: "França" },
      { name: "Semifinal", score: "2–0", opp: "Brasil" },
      { name: "Final", score: "1–0 (pro)", opp: "Argentina" }
    ]
  }
};

const balls = [
  { year: 1930, name: "T-Model", emoji: "⚽" },
  { year: 1934, name: "Federale 102", emoji: "⚽" },
  { year: 1938, name: "Allen", emoji: "⚽" },
  { year: 1950, name: "Duplo T", emoji: "⚽" },
  { year: 1954, name: "Swiss World Champion", emoji: "⚽" },
  { year: 1958, name: "Top Star", emoji: "⚽" },
  { year: 1962, name: "Mr. Crack", emoji: "⚽" },
  { year: 1966, name: "Challenge 4-Star", emoji: "⚽" },
  { year: 1970, name: "Telstar", emoji: "⚫⚪" },
  { year: 1974, name: "Telstar Durlast", emoji: "⚫⚪" },
  { year: 1978, name: "Tango", emoji: "⚫⚪" },
  { year: 1982, name: "Tango España", emoji: "⚫⚪" },
  { year: 1986, name: "Azteca", emoji: "⚽" },
  { year: 1990, name: "Etrusco Unico", emoji: "⚽" },
  { year: 1994, name: "Questra", emoji: "⚽" },
  { year: 1998, name: "Tricolore", emoji: "🇫🇷" },
  { year: 2002, name: "Fevernova", emoji: "🔥" },
  { year: 2006, name: "Teamgeist", emoji: "⚽" },
  { year: 2010, name: "Jabulani", emoji: "⚽" },
  { year: 2014, name: "Brazuca", emoji: "🇧🇷" },
  { year: 2018, name: "Telstar 18", emoji: "⚫⚪" },
  { year: 2022, name: "Al Rihla", emoji: "✈️" },
  { year: 2026, name: "Trionda", emoji: "🌊" }
];

const stadiums = [
  { name: "Estádio Centenário", year: "1930 · Montevidéu", emoji: "🏟️" },
  { name: "Maracanã", year: "1950 · Rio de Janeiro", emoji: "🏟️" },
  { name: "Wembley", year: "1966 · Londres", emoji: "🏟️" },
  { name: "Estádio Azteca", year: "1970/86 · Cidade do México", emoji: "🏟️" },
  { name: "Olympiastadion", year: "1974 · Munique", emoji: "🏟️" },
  { name: "Monumental", year: "1978 · Buenos Aires", emoji: "🏟️" },
  { name: "Santiago Bernabéu", year: "1982 · Madrid", emoji: "🏟️" },
  { name: "Rose Bowl", year: "1994 · Pasadena", emoji: "🏟️" },
  { name: "Stade de France", year: "1998 · Saint-Denis", emoji: "🏟️" },
  { name: "Yokohama / Seoul", year: "2002", emoji: "🏟️" },
  { name: "Olympiastadion Berlin", year: "2006", emoji: "🏟️" },
  { name: "Soccer City", year: "2010 · Joanesburgo", emoji: "🏟️" },
  { name: "Maracanã", year: "2014 · Rio", emoji: "🏟️" },
  { name: "Luzhniki", year: "2018 · Moscou", emoji: "🏟️" },
  { name: "Lusail Stadium", year: "2022 · Catar", emoji: "🏟️" },
  { name: "MetLife Stadium", year: "2026 · Nova Jersey", emoji: "🏟️" }
];

// ===== RENDER CHAMPIONS =====
const grid = document.getElementById('championsGrid');
champions.forEach(c => {
  const card = document.createElement('div');
  card.className = 'champion-card';
  card.innerHTML = `
    <div class="year">${c.year}</div>
    <span class="flag">${c.flag}</span>
    <div class="nation">${c.nation}</div>
    <div class="titles">${c.titles} título${c.titles > 1 ? 's' : ''}</div>
  `;
  grid.appendChild(card);
});

// ===== PATH SELECTOR =====
const pathSel = document.getElementById('pathSelector');
const pathDisp = document.getElementById('pathDisplay');
Object.keys(paths).sort((a,b) => b - a).forEach(year => {
  const btn = document.createElement('button');
  btn.className = 'path-btn';
  btn.textContent = year;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.path-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showPath(year);
  });
  pathSel.appendChild(btn);
});

function showPath(year) {
  const p = paths[year];
  pathDisp.innerHTML = `
    <div class="path-header">
      <span class="flag">${p.flag}</span>
      <div>
        <h3>${p.nation} · ${year}</h3>
        <span>Caminho até o título</span>
      </div>
    </div>
    <div class="path-stages">
      ${p.stages.map((s, i) => `
        <div class="stage ${i === p.stages.length - 1 ? 'final' : ''}">
          <div class="stage-name">${s.name}</div>
          <div class="score">${s.score}</div>
          <div class="opp">vs ${s.opp}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// ===== GALLERY =====
const galleryGrid = document.getElementById('galleryGrid');

function renderGallery(tab) {
  galleryGrid.innerHTML = '';
  const data = tab === 'balls' ? balls : stadiums;
  data.forEach(item => {
    const el = document.createElement('div');
    el.className = 'gallery-item';
    el.innerHTML = `
      <div class="visual">${item.emoji || '⚽'}</div>
      <div class="name">${item.name}</div>
      <div class="year">${item.year || ''}</div>
    `;
    galleryGrid.appendChild(el);
  });
}
renderGallery('balls');

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.tab);
  });
});

// ===== COUNTERS & BARS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.querySelector('.number[data-count]')) {
        animateCounters(entry.target);
      }
      if (entry.target.querySelector('.bar-fill')) {
        entry.target.querySelectorAll('.bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

function animateCounters(container) {
  container.querySelectorAll('.number[data-count]').forEach(el => {
    const target = +el.dataset.count;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, 30);
  });
}

// ===== NAV =====
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ===== MINI-GAME: PENALTY =====
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const attemptsEl = document.getElementById('attempts');
const accuracyEl = document.getElementById('accuracy');
const gameMsg = document.getElementById('gameMsg');
const kickBtn = document.getElementById('kickBtn');
const resetBtn = document.getElementById('resetBtn');

let score = 0, attempts = 0;
let gkX = 320, gkDir = 1, gkSpeed = 3;
let ballY = 300, ballX = 320, ballActive = false;
let power = 0, powerDir = 1, shooting = false;
let result = null;

function resizeCanvas() {
  const maxW = Math.min(640, window.innerWidth - 60);
  canvas.style.width = maxW + 'px';
  canvas.style.height = (maxW * 0.5625) + 'px';
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawField() {
  ctx.fillStyle = '#0d1a0d';
  ctx.fillRect(0, 0, 640, 360);

  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 40 + i * 40);
    ctx.lineTo(640, 40 + i * 40);
    ctx.stroke();
  }

  ctx.strokeStyle = '#f5f5f7';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(160, 40);
  ctx.lineTo(160, 160);
  ctx.lineTo(480, 160);
  ctx.lineTo(480, 40);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 1;
  for (let x = 170; x < 480; x += 20) {
    ctx.beginPath();
    ctx.moveTo(x, 40);
    ctx.lineTo(x, 160);
    ctx.stroke();
  }
  for (let y = 50; y < 160; y += 15) {
    ctx.beginPath();
    ctx.moveTo(160, y);
    ctx.lineTo(480, y);
    ctx.stroke();
  }

  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(160, 160);
  ctx.lineTo(480, 160);
  ctx.stroke();
}

function drawGK() {
  ctx.fillStyle = '#e63946';
  ctx.fillRect(gkX - 25, 100, 50, 50);
  ctx.beginPath();
  ctx.arc(gkX, 90, 15, 0, Math.PI * 2);
  ctx.fillStyle = '#f5d0a9';
  ctx.fill();
  ctx.fillStyle = '#e63946';
  ctx.fillRect(gkX - 40, 110, 15, 30);
  ctx.fillRect(gkX + 25, 110, 15, 30);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, 12, 0, Math.PI * 2);
  ctx.fillStyle = '#f5f5f7';
  ctx.fill();
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function drawPowerBar() {
  if (!shooting && !ballActive) {
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(220, 320, 200, 16);
    ctx.fillStyle = power > 70 ? '#e63946' : power > 40 ? '#d4af37' : '#2ecc71';
    ctx.fillRect(220, 320, power * 2, 16);
    ctx.strokeStyle = '#f5f5f7';
    ctx.strokeRect(220, 320, 200, 16);
  }
}

function update() {
  if (!ballActive && !result) {
    gkX += gkDir * gkSpeed;
    if (gkX > 450 || gkX < 190) gkDir *= -1;

    if (shooting) {
      power += powerDir * 2.5;
      if (power >= 100 || power <= 0) powerDir *= -1;
    }
  }

  if (ballActive) {
    ballY -= 8;
    if (power < 35) ballX -= 1.5;
    else if (power > 75) ballX += 1.5;

    if (ballY <= 140) {
      ballActive = false;
      const dist = Math.abs(ballX - gkX);
      if (dist < 40) {
        result = 'save';
        gameMsg.textContent = '🧤 DEFENDIDO! Tente novamente.';
        gameMsg.style.color = 'var(--accent)';
      } else if (ballX > 165 && ballX < 475) {
        result = 'goal';
        score++;
        gameMsg.textContent = '⚽ GOOOOL! Que precisão!';
        gameMsg.style.color = 'var(--success)';
      } else {
        result = 'miss';
        gameMsg.textContent = '❌ Para fora! Ajuste o timing.';
        gameMsg.style.color = 'var(--accent)';
      }
      attempts++;
      updateStats();
      setTimeout(resetBall, 1500);
    }
  }

  drawField();
  drawGK();
  drawBall();
  drawPowerBar();
  requestAnimationFrame(update);
}

function updateStats() {
  scoreEl.textContent = score;
  attemptsEl.textContent = attempts;
  accuracyEl.textContent = attempts ? Math.round((score / attempts) * 100) + '%' : '0%';
}

function resetBall() {
  ballY = 300;
  ballX = 320;
  power = 0;
  powerDir = 1;
  shooting = false;
  ballActive = false;
  result = null;
  gameMsg.textContent = 'Clique ou toque para chutar no momento certo!';
  gameMsg.style.color = 'var(--gold-light)';
  gkSpeed = 2.5 + Math.random() * 2.5;
}

function startKick() {
  if (ballActive || result) return;
  if (!shooting) {
    shooting = true;
    power = 0;
    powerDir = 1;
    gameMsg.textContent = 'Segure... solte no momento certo!';
  } else {
    shooting = false;
    ballActive = true;
  }
}

canvas.addEventListener('click', startKick);
canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startKick(); });
kickBtn.addEventListener('click', startKick);
resetBtn.addEventListener('click', () => {
  score = 0; attempts = 0;
  updateStats();
  resetBall();
});

update();
