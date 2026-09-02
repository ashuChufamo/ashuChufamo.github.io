/**
 * Dynamic Content Renderer & UI Logic — Ashenafi Chufamo Portfolio (V3.0 Complete)
 * Primary Positioning: Senior Software Engineer → Applied AI/ML
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileMenu();
  initScrollProgress();
  initSmoothScroll();

  // Render V3.0 complete narrative sections
  renderPersonalHeader();
  renderAboutSection();
  renderProductionSignals();
  renderCareerTransition();
  renderSoftwareBuilt();
  renderArifPayAI();
  renderIntelligentSystems();
  renderAppliedAICaseStudies();
  initProjectFilterTabs();
  renderTechnestProducts();
  renderWhatIActuallyDo();
  renderTechStack();
  renderAIAreasGrid();
  renderMScResearch();
  renderCurrentlyExploring();
  renderTeachingExperience();
  renderCareerTimeline();

  // Setup modal handlers
  initCaseStudyModal();
});

/* --------------------------------------------------------------------------
   1. Personal Header & Hero Info
   -------------------------------------------------------------------------- */
function renderPersonalHeader() {
  const p = window.personalInfo;
  if (!p) return;

  const heroTitle = document.getElementById("hero-name");
  const heroRoles = document.getElementById("hero-headline");
  const heroDesc = document.getElementById("hero-bio");
  const copyrightYear = document.getElementById("copyright-year");
  const cvButtons = document.querySelectorAll(".cv-download-btn");

  if (heroTitle) heroTitle.textContent = p.name;
  if (heroRoles) heroRoles.textContent = p.headline;
  if (heroDesc) heroDesc.textContent = p.supportingCopy || p.bio;
  if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();

  if (cvButtons && p.cvUrl) {
    cvButtons.forEach(btn => {
      btn.setAttribute("href", p.cvUrl);
      btn.setAttribute("target", "_blank");
    });
  }
}

/* --------------------------------------------------------------------------
   2. About Section Story
   -------------------------------------------------------------------------- */
function renderAboutSection() {
  const container = document.getElementById("about-paragraphs-container");
  const p = window.personalInfo;
  if (!container || !p || !p.aboutText) return;

  container.innerHTML = p.aboutText.map(para => `
    <p style="margin-bottom: 16px; color: var(--text-secondary); line-height: 1.75; font-size: 1.02rem;">
      ${para}
    </p>
  `).join("");
}

/* --------------------------------------------------------------------------
   3. Qualitative Production Signals / Badges
   -------------------------------------------------------------------------- */
function renderProductionSignals() {
  const container = document.getElementById("production-signals-container");
  const list = window.productionSignals;
  if (!container || !list) return;

  container.innerHTML = `
    <div class="signal-badges-row">
      ${list.map(s => `<span class="signal-badge"><span>⚡</span> ${s}</span>`).join("")}
    </div>
  `;
}

/* --------------------------------------------------------------------------
   4. Visual Career Transition Timeline
   -------------------------------------------------------------------------- */
function renderCareerTransition() {
  const container = document.getElementById("transition-timeline-flow");
  const list = window.careerTransition;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="timeline-step-card">
      <span class="timeline-step-num">STEP ${item.step}</span>
      <h3 class="timeline-step-phase">${item.phase}</h3>
      <p class="timeline-step-desc">${item.desc}</p>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   5. Software I've Built (Featured Real Projects)
   -------------------------------------------------------------------------- */
function renderSoftwareBuilt() {
  const container = document.getElementById("software-built-grid");
  const list = window.softwareBuilt;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="glass-card project-card-item" data-filter="${item.filterCategory || item.category}">
      ${item.image ? `<img src="${item.image}" alt="${item.title}" class="card-img-thumb" loading="lazy" />` : ''}
      <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 1px; margin-bottom: 4px;">
        ${item.category}
      </div>
      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
        ${item.title}
        ${item.url ? ` <a href="${item.url}" target="_blank" rel="noopener" style="font-size: 0.82rem; color: var(--accent-cyan); text-decoration: underline;">[zayno.io]</a>` : ''}
      </h3>
      ${item.myRole ? `<div class="my-role-badge">My Role: ${item.myRole}</div>` : ''}
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 10px;">
        ${item.desc}
      </p>

      ${item.capabilities ? `
        <div style="margin-bottom: 12px; background: rgba(0, 242, 254, 0.04); border-left: 2px solid var(--accent-cyan); padding: 8px 10px; border-radius: 0 4px 4px 0;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 4px;">System Roles: ${item.rolesAllowed ? item.rolesAllowed.join(" • ") : ''}</div>
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">Core Capabilities:</div>
          <ul style="font-size: 0.78rem; color: var(--text-secondary); padding-left: 12px; list-style: disc;">
            ${item.capabilities.map(c => `<li>${c}</li>`).join("")}
          </ul>
        </div>
      ` : ''}

      ${item.subApps ? `
        <div style="margin-bottom: 12px; background: rgba(0, 242, 254, 0.04); border-left: 2px solid var(--accent-cyan); padding: 6px 10px; border-radius: 0 4px 4px 0;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 4px;">Suite Applications:</div>
          <ul style="font-size: 0.8rem; color: var(--text-secondary); padding-left: 12px; list-style: disc;">
            ${item.subApps.map(app => `<li>${app}</li>`).join("")}
          </ul>
        </div>
      ` : ''}

      <div class="tag-list">
        ${item.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   6. Applied AI at ArifPay
   -------------------------------------------------------------------------- */
function renderArifPayAI() {
  const container = document.getElementById("arifpay-ai-grid");
  const data = window.arifPayAI;
  if (!container || !data) return;

  container.innerHTML = data.projects.map(item => `
    <div class="glass-card project-card-item" data-filter="${item.filterCategory || item.category}">
      <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-emerald); letter-spacing: 1px; margin-bottom: 4px;">
        ${item.category}
      </div>
      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
        ${item.title}
      </h3>
      ${item.myRole ? `<div class="my-role-badge">My Role: ${item.myRole}</div>` : ''}
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 10px;">
        ${item.desc}
      </p>
      ${item.areas ? `
        <div style="margin-bottom: 10px; font-size: 0.8rem; color: var(--text-primary); font-weight: 500;">
          <span style="color: var(--accent-emerald); font-weight: 700;">Key Areas:</span> ${item.areas.join(" • ")}
        </div>
      ` : ''}
      <div class="tag-list">
        ${item.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   7. Intelligent Systems (Marketing, BD, Social Media, Partnership, Agentic AI)
   -------------------------------------------------------------------------- */
function renderIntelligentSystems() {
  const container = document.getElementById("intelligent-systems-grid");
  const list = window.intelligentSystems;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="intel-card">
      <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-purple); letter-spacing: 1px; margin-bottom: 4px;">
        Intelligent System
      </div>
      <h3 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
        ${item.title}
      </h3>
      <p style="font-size: 0.86rem; color: var(--text-secondary); margin-bottom: 10px;">
        ${item.desc}
      </p>
      <div class="tag-list">
        ${item.tech.map(t => `<span class="tech-tag" style="background: rgba(186, 104, 200, 0.08); color: var(--accent-purple); border-color: rgba(186, 104, 200, 0.2);">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   8. Selected Applied AI Case Studies & Modal Drawer
   -------------------------------------------------------------------------- */
function renderAppliedAICaseStudies() {
  const container = document.getElementById("applied-ai-case-studies-grid");
  const list = window.appliedAICaseStudies;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="glass-card project-card-item" data-filter="${item.filterCategory || 'Applied AI / ML'}" style="display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-purple); letter-spacing: 1px; margin-bottom: 4px;">
          ${item.category}
        </div>
        <h3 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
          ${item.title}
        </h3>
        ${item.myRole ? `<div class="my-role-badge">My Role: ${item.myRole}</div>` : ''}
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 14px;">
          ${item.summary}
        </p>
      </div>
      <div>
        <div class="tag-list" style="margin-bottom: 16px;">
          ${item.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
        <button class="btn-secondary open-case-study-btn" data-id="${item.id}" style="width: 100%; justify-content: center; padding: 8px 14px; font-size: 0.84rem;">
          View Case Study Details →
        </button>
      </div>
    </div>
  `).join("");

  const buttons = container.querySelectorAll(".open-case-study-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const csId = btn.getAttribute("data-id");
      openCaseStudyModal(csId);
    });
  });
}

function openCaseStudyModal(id) {
  const modal = document.getElementById("case-study-modal");
  const content = document.getElementById("case-study-modal-body");
  const list = window.appliedAICaseStudies;
  if (!modal || !content || !list) return;

  const item = list.find(cs => cs.id === id);
  if (!item) return;

  content.innerHTML = `
    <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 1px; margin-bottom: 4px;">
      ${item.category} • Case Study
    </div>
    <h2 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
      ${item.title}
    </h2>
    ${item.myRole ? `<div class="my-role-badge" style="margin-bottom: 16px;">My Role: ${item.myRole}</div>` : ''}

    <div class="cs-block">
      <span class="cs-block-label">Problem</span>
      <p class="cs-block-text">${item.problem}</p>
    </div>

    <div class="cs-block">
      <span class="cs-block-label">Approach</span>
      <p class="cs-block-text">${item.approach}</p>
    </div>

    <div class="cs-block">
      <span class="cs-block-label">My Contribution</span>
      <p class="cs-block-text">${item.contribution}</p>
    </div>

    <div class="cs-block">
      <span class="cs-block-label">Technologies Used</span>
      <div class="tag-list">
        ${item.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("active");
}

function initCaseStudyModal() {
  const modal = document.getElementById("case-study-modal");
  const closeBtn = document.getElementById("close-case-study-btn");
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      setTimeout(() => modal.classList.add("hidden"), 300);
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      setTimeout(() => modal.classList.add("hidden"), 300);
    }
  });
}

/* --------------------------------------------------------------------------
   9. Project Category Filtering
   -------------------------------------------------------------------------- */
function initProjectFilterTabs() {
  const filterContainer = document.getElementById("project-filter-bar");
  if (!filterContainer) return;

  const categories = [
    "All",
    "Software Engineering",
    "Applied AI / ML",
    "Fintech",
    "Mobile",
    "Backend",
    "Computer Vision",
    "Data"
  ];

  filterContainer.innerHTML = categories.map((cat, idx) => `
    <button class="filter-tab-btn ${idx === 0 ? 'active' : ''}" data-cat="${cat}">
      ${cat}
    </button>
  `).join("");

  const buttons = filterContainer.querySelectorAll(".filter-tab-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const targetCat = btn.getAttribute("data-cat");
      filterProjects(targetCat);
    });
  });
}

function filterProjects(category) {
  const allCards = document.querySelectorAll(".project-card-item");
  allCards.forEach(card => {
    const cardCat = card.getAttribute("data-filter") || "";
    if (category === "All" || cardCat.toLowerCase().includes(category.toLowerCase())) {
      card.style.display = "flex";
      card.style.opacity = "1";
    } else {
      card.style.display = "none";
    }
  });
}

/* --------------------------------------------------------------------------
   10. Technest Products (Cofounder • Product & Technology)
   -------------------------------------------------------------------------- */
function renderTechnestProducts() {
  const productsContainer = document.getElementById("technest-products-grid");
  const data = window.technestProducts;
  if (!data || !productsContainer || !data.products) return;

  productsContainer.innerHTML = data.products.map(item => `
    <div class="glass-card project-card-item" data-filter="${item.filterCategory || item.category}">
      <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-amber); letter-spacing: 1px; margin-bottom: 4px;">
        ${item.category}
      </div>
      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
        ${item.title}
        ${item.url ? ` <a href="${item.url}" target="_blank" rel="noopener" style="font-size: 0.82rem; color: var(--accent-cyan); text-decoration: underline;">[zayno.io]</a>` : ''}
      </h3>
      ${item.myRole ? `<div class="my-role-badge">My Role: ${item.myRole}</div>` : ''}
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
        ${item.desc}
      </p>
      <div class="tag-list">
        ${item.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   11. "What I Actually Do" (5 Capability Cards)
   -------------------------------------------------------------------------- */
function renderWhatIActuallyDo() {
  const container = document.getElementById("what-i-actually-do-grid");
  const list = window.whatIActuallyDo;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="capability-card-v3">
      <div style="font-size: 1.8rem; margin-bottom: 10px;">${item.icon}</div>
      <h3 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: ${item.color || 'var(--text-primary)'}; margin-bottom: 8px;">
        ${item.title}
      </h3>
      <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
        ${item.desc}
      </p>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   12. Technology Stack & AI Areas
   -------------------------------------------------------------------------- */
function renderTechStack() {
  const container = document.getElementById("tech-stack-grid");
  const data = window.techStack;
  if (!container || !data) return;

  container.innerHTML = `
    <div class="glass-card">
      <h3 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 10px;">Languages</h3>
      <div class="tag-list">
        ${data.languages.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div class="glass-card">
      <h3 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--accent-emerald); margin-bottom: 10px;">Mobile</h3>
      <div class="tag-list">
        ${data.mobile.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div class="glass-card">
      <h3 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--accent-blue); margin-bottom: 10px;">Frontend</h3>
      <div class="tag-list">
        ${data.frontend.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div class="glass-card">
      <h3 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--accent-amber); margin-bottom: 10px;">Backend</h3>
      <div class="tag-list">
        ${data.backend.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div class="glass-card">
      <h3 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--accent-purple); margin-bottom: 10px;">AI / Machine Learning</h3>
      <div class="tag-list">
        ${data.aiMl.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div class="glass-card">
      <h3 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--accent-emerald); margin-bottom: 10px;">Data</h3>
      <div class="tag-list">
        ${data.data.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderAIAreasGrid() {
  const container = document.getElementById("ai-areas-grid");
  const list = window.aiAreasGrid;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="ai-area-card">
      <h4 class="ai-area-title">${item.domain}</h4>
      <div class="tag-list">
        ${item.topics.map(t => `<span class="tech-tag" style="background: rgba(0, 242, 254, 0.06); color: var(--text-primary); border-color: var(--border-color);">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   13. Academic Research
   -------------------------------------------------------------------------- */
function renderMScResearch() {
  const container = document.getElementById("msc-research-flow");
  const data = window.mscResearch;
  if (!container || !data) return;

  container.innerHTML = data.flow.map((step, idx) => `
    <div class="thesis-flow-step">
      <div class="thesis-flow-label">${step.label}</div>
      <div class="thesis-flow-detail">${step.detail}</div>
    </div>
    ${idx < data.flow.length - 1 ? '<div class="thesis-arrow">→</div>' : ''}
  `).join("");
}

/* --------------------------------------------------------------------------
   14. Currently Exploring
   -------------------------------------------------------------------------- */
function renderCurrentlyExploring() {
  const container = document.getElementById("currently-exploring-grid");
  const list = window.currentlyExploring;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="glass-card" style="padding: 18px 16px;">
      <h4 style="color: var(--accent-cyan); font-size: 1rem; margin-bottom: 6px;">${item.topic}</h4>
      <p style="font-size: 0.84rem; color: var(--text-secondary);">${item.desc}</p>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   15. Laboratory Instructor Entry
   -------------------------------------------------------------------------- */
function renderTeachingExperience() {
  const container = document.getElementById("teaching-lab-box");
  const data = window.teachingExperience;
  if (!container || !data) return;

  container.innerHTML = `
    <div class="glass-card" style="border-left: 3px solid var(--accent-cyan);">
      <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 1px; margin-bottom: 4px;">
        ${data.role} • ${data.institution}
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 10px;">
        ${data.desc}
      </p>
      <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">Laboratory Practical Sessions:</div>
      <ul style="font-size: 0.82rem; color: var(--text-secondary); padding-left: 16px; list-style: disc;">
        ${data.courses.map(c => `<li>${c}</li>`).join("")}
      </ul>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   16. Career History & Education Timeline
   -------------------------------------------------------------------------- */
function renderCareerTimeline() {
  const timelineContainer = document.getElementById("career-history-timeline");
  const eduContainer = document.getElementById("education-history-timeline");
  const expList = window.careerTimeline;
  const eduList = window.educationHistory;

  if (timelineContainer && expList) {
    timelineContainer.innerHTML = expList.map(item => `
      <div style="position: relative; padding-left: 24px; border-left: 2px solid var(--border-color); margin-bottom: 24px;">
        <div style="position: absolute; left: -7px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--accent-cyan);"></div>
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan);">${item.period}</div>
        <h4 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--text-primary); margin: 2px 0;">${item.role}</h4>
        <div style="font-size: 0.88rem; font-weight: 600; color: var(--accent-emerald); margin-bottom: 6px;">${item.company}</div>
        <p style="font-size: 0.86rem; color: var(--text-secondary);">${item.desc}</p>
      </div>
    `).join("");
  }

  if (eduContainer && eduList) {
    eduContainer.innerHTML = eduList.map(item => `
      <div style="position: relative; padding-left: 24px; border-left: 2px solid var(--border-color); margin-bottom: 24px;">
        <div style="position: absolute; left: -7px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--accent-emerald);"></div>
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-emerald);">${item.period}</div>
        <h4 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--text-primary); margin: 2px 0;">${item.degree}</h4>
        <div style="font-size: 0.88rem; font-weight: 600; color: var(--accent-cyan); margin-bottom: 6px;">${item.institution}</div>
        <p style="font-size: 0.86rem; color: var(--text-secondary);">${item.desc}</p>
      </div>
    `).join("");
  }
}

/* --------------------------------------------------------------------------
   17. Theme & Mobile Menu Controls
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(btn, currentTheme);

  btn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(btn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

function initMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const links = menu.querySelectorAll(".nav-link");
  links.forEach(l => {
    l.addEventListener("click", () => menu.classList.remove("active"));
  });
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + "%";
  });
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}