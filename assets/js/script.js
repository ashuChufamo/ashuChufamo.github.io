/**
 * Dynamic Content Renderer & UI Logic — Ashenafi Chufamo Portfolio
 * Narrative: Senior Software Engineer → AI/ML Engineer
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileMenu();
  initScrollProgress();
  initSmoothScroll();

  // Render narrative sections
  renderPersonalHeader();
  renderCareerTransition();
  renderSoftwareBuilt();
  renderArifPayAI();
  renderAppliedAICaseStudies();
  renderTechnestProducts();
  renderWhatIActuallyDo();
  renderTechStack();
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

  if (heroTitle) heroTitle.textContent = p.name;
  if (heroRoles) heroRoles.textContent = p.headline;
  if (heroDesc) heroDesc.textContent = p.bio;
  if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();
}

/* --------------------------------------------------------------------------
   2. Career Transition Timeline ("From Software Engineering to AI")
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
   3. Software Engineering Showcase ("Software I've Built")
   -------------------------------------------------------------------------- */
function renderSoftwareBuilt() {
  const container = document.getElementById("software-built-grid");
  const list = window.softwareBuilt;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="glass-card">
      ${item.image ? `<img src="${item.image}" alt="${item.title}" class="card-img-thumb" loading="lazy" />` : ''}
      <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 1px; margin-bottom: 4px;">
        ${item.category}
      </div>
      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
        ${item.title}
      </h3>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
        ${item.desc}
      </p>
      ${item.role ? `<div style="font-size: 0.82rem; font-weight: 600; color: var(--accent-emerald); margin-bottom: 10px;">Role: ${item.role}</div>` : ''}
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
   4. Applied AI at ArifPay (Data Science Engineer)
   -------------------------------------------------------------------------- */
function renderArifPayAI() {
  const container = document.getElementById("arifpay-ai-grid");
  const data = window.arifPayAI;
  if (!container || !data) return;

  container.innerHTML = data.projects.map(item => `
    <div class="glass-card">
      ${item.image ? `<img src="${item.image}" alt="${item.title}" class="card-img-thumb" loading="lazy" />` : ''}
      <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-emerald); letter-spacing: 1px; margin-bottom: 4px;">
        ${item.category}
      </div>
      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
        ${item.title}
      </h3>
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
   5. Interactive Applied AI Case Studies
   -------------------------------------------------------------------------- */
function renderAppliedAICaseStudies() {
  const container = document.getElementById("applied-ai-case-studies-grid");
  const list = window.appliedAICaseStudies;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-purple); letter-spacing: 1px; margin-bottom: 4px;">
          ${item.category}
        </div>
        <h3 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
          ${item.title}
        </h3>
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

  // Attach event listeners to buttons
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
    <h2 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700; color: var(--text-primary); margin-bottom: 20px;">
      ${item.title}
    </h2>

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
   6. Building Products at Technest / Sumuni (Cofounder)
   -------------------------------------------------------------------------- */
function renderTechnestProducts() {
  const lifecycleContainer = document.getElementById("technest-lifecycle-flow");
  const productsContainer = document.getElementById("technest-products-grid");
  const data = window.technestProducts;
  if (!data) return;

  if (lifecycleContainer && data.lifecycle) {
    lifecycleContainer.innerHTML = data.lifecycle.map(step => `
      <div style="flex: 1; min-width: 150px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px 12px; text-align: center;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 4px;">STAGE ${step.step}</div>
        <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; color: var(--text-primary); margin-bottom: 4px;">${step.name}</div>
        <div style="font-size: 0.8rem; color: var(--text-secondary);">${step.desc}</div>
      </div>
    `).join("");
  }

  if (productsContainer && data.products) {
    productsContainer.innerHTML = data.products.map(item => `
      <div class="glass-card">
        ${item.image ? `<img src="${item.image}" alt="${item.title}" class="card-img-thumb" loading="lazy" />` : ''}
        <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-amber); letter-spacing: 1px; margin-bottom: 4px;">
          ${item.category}
        </div>
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
          ${item.title}
          ${item.url ? ` <a href="${item.url}" target="_blank" rel="noopener" style="font-size: 0.82rem; color: var(--accent-cyan); text-decoration: underline;">[zayno.io]</a>` : ''}
        </h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
          ${item.desc}
        </p>
        <div class="tag-list">
          ${item.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }
}

/* --------------------------------------------------------------------------
   7. "What I Actually Do" Section
   -------------------------------------------------------------------------- */
function renderWhatIActuallyDo() {
  const container = document.getElementById("what-i-actually-do-grid");
  const data = window.whatIActuallyDo;
  if (!container || !data) return;

  container.innerHTML = `
    <div class="what-i-do-card">
      <h3 class="what-i-do-title">⚡ SOFTWARE</h3>
      ${data.build.map(item => `
        <div class="capability-list-item">
          <div class="capability-item-name">${item.name}</div>
          <div class="capability-item-desc">${item.desc}</div>
        </div>
      `).join("")}
    </div>

    <div class="what-i-do-card">
      <h3 class="what-i-do-title" style="color: var(--accent-emerald);">🧠 INTELLIGENCE</h3>
      ${data.intelligence.map(item => `
        <div class="capability-list-item">
          <div class="capability-item-name">${item.name}</div>
          <div class="capability-item-desc">${item.desc}</div>
        </div>
      `).join("")}
    </div>

    <div class="what-i-do-card">
      <h3 class="what-i-do-title" style="color: var(--accent-purple);">🚀 PRODUCTS</h3>
      ${data.product.map(item => `
        <div class="capability-list-item">
          <div class="capability-item-name">${item.name}</div>
          <div class="capability-item-desc">${item.desc}</div>
        </div>
      `).join("")}
    </div>
  `;
}

/* --------------------------------------------------------------------------
   8. Technology Stack
   -------------------------------------------------------------------------- */
function renderTechStack() {
  const container = document.getElementById("tech-stack-grid");
  const data = window.techStack;
  if (!container || !data) return;

  container.innerHTML = `
    <div class="glass-card">
      <h3 style="font-family: var(--font-heading); font-size: 1.15rem; color: var(--accent-cyan); margin-bottom: 14px;">Software Engineering</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${data.softwareEngineering.map(t => `
          <div style="display: flex; justify-content: space-between; font-size: 0.88rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 4px;">
            <span style="color: var(--text-primary); font-weight: 500;">${t.name}</span>
            <span style="color: var(--accent-cyan); font-size: 0.78rem; font-weight: 600;">${t.level}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="glass-card">
      <h3 style="font-family: var(--font-heading); font-size: 1.15rem; color: var(--accent-emerald); margin-bottom: 14px;">AI / Machine Learning</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${data.aiMl.map(t => `
          <div style="display: flex; justify-content: space-between; font-size: 0.88rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 4px;">
            <span style="color: var(--text-primary); font-weight: 500;">${t.name}</span>
            <span style="color: var(--accent-emerald); font-size: 0.78rem; font-weight: 600;">${t.level}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="glass-card">
      <h3 style="font-family: var(--font-heading); font-size: 1.15rem; color: var(--accent-amber); margin-bottom: 14px;">Data & Infrastructure</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${data.dataInfra.map(t => `
          <div style="display: flex; justify-content: space-between; font-size: 0.88rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 4px;">
            <span style="color: var(--text-primary); font-weight: 500;">${t.name}</span>
            <span style="color: var(--accent-amber); font-size: 0.78rem; font-weight: 600;">${t.level}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   9. MSc Research Thesis Distillation Flow
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
   10. Currently Exploring
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
   11. Laboratory Instructor Teaching Experience
   -------------------------------------------------------------------------- */
function renderTeachingExperience() {
  const container = document.getElementById("teaching-lab-box");
  const data = window.teachingExperience;
  if (!container || !data) return;

  container.innerHTML = `
    <div class="glass-card" style="border-left: 3px solid var(--accent-cyan);">
      <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 1px; margin-bottom: 4px;">
        ${data.role} • ${data.institution} (${data.period})
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
        ${data.desc}
      </p>
      <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Lab Course Component Instructed:</div>
      <ul style="font-size: 0.84rem; color: var(--text-secondary); padding-left: 16px; list-style: disc;">
        ${data.courses.map(c => `<li>${c}</li>`).join("")}
      </ul>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   12. Career Timeline & Education
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
   13. UI Navigation Controls (Theme, Mobile Menu, Scroll)
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