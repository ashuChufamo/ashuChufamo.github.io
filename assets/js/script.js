/**
 * Main Interactive Logic & Dynamic Content Renderer (Updated)
 * Reads structured data from window.* and handles UI rendering across all project suites.
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileMenu();
  initScrollProgress();
  renderAISystems();
  renderArifPayProducts();
  renderSumuniProjects();
  renderQemerProjects();
  renderFreelanceProjects();
  renderAAUBScProjects();
  renderSelectedProjects();
  renderTechStack();
  renderTimeline();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Theme Switcher (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const toggleIcon = document.getElementById("theme-toggle-icon");
  const currentTheme = localStorage.getItem("ashu_theme") || "dark";

  document.documentElement.setAttribute("data-theme", currentTheme);
  if (toggleIcon) toggleIcon.textContent = currentTheme === "dark" ? "🌙" : "☀️";

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = activeTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("ashu_theme", newTheme);
      if (toggleIcon) toggleIcon.textContent = newTheme === "dark" ? "🌙" : "☀️";
    });
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

/* --------------------------------------------------------------------------
   3. Scroll Progress Indicator
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress-bar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;
  });
}

/* --------------------------------------------------------------------------
   4. Render AI Systems & Category Filtering
   -------------------------------------------------------------------------- */
function renderAISystems() {
  const grid = document.getElementById("ai-systems-grid");
  const filterTabs = document.querySelectorAll("#ai-filter-bar .filter-tab");
  if (!grid || !window.aiSystemsData) return;

  function displayItems(filter = "all") {
    grid.innerHTML = "";
    const filtered = filter === "all"
      ? window.aiSystemsData
      : window.aiSystemsData.filter((item) => item.category.toLowerCase().includes(filter.toLowerCase()));

    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className = "glass-card ai-card";
      card.innerHTML = `
        <div>
          ${item.image ? `<img src="${item.image}" alt="${item.title}" class="card-img-thumb" onerror="this.src='./assets/images/project-1.jpg'" />` : ''}
          <div class="ai-card-category">${item.category}</div>
          <h3 class="ai-card-title">${item.title}</h3>
          <div class="ai-card-body">
            <p><strong>Problem:</strong> ${item.problem}</p>
            <p style="margin-top: 6px;"><strong>Solution:</strong> ${item.solution}</p>
          </div>
        </div>
        <div>
          <div class="ai-impact-box">💡 <strong>Impact:</strong> ${item.impact}</div>
          <div class="tag-list">
            ${item.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  displayItems("all");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      displayItems(tab.getAttribute("data-filter"));
    });
  });
}

/* --------------------------------------------------------------------------
   5. Render ArifPay 12-Project Suite
   -------------------------------------------------------------------------- */
function renderArifPayProducts() {
  const grid = document.getElementById("arifpay-products-grid");
  if (!grid || !window.arifPayData || !window.arifPayData.products) return;

  grid.innerHTML = window.arifPayData.products
    .map(
      (p) => `
      <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <img src="${p.image}" alt="${p.title}" class="card-img-thumb" onerror="this.src='./assets/images/project-2.png'" />
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 4px;">
            ${p.category}
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; margin-bottom: 8px; color: var(--text-primary);">
            ${p.title}
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">
            ${p.desc}
          </p>
        </div>
        <div class="tag-list">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   6. Render Sumuni / Technest Projects (Zayno with link, Alateon, Airport Parking)
   -------------------------------------------------------------------------- */
function renderSumuniProjects() {
  const grid = document.getElementById("sumuni-projects-grid");
  if (!grid || !window.sumuniData || !window.sumuniData.projects) return;

  grid.innerHTML = window.sumuniData.projects
    .map(
      (p) => `
      <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <img src="${p.image}" alt="${p.title}" class="card-img-thumb" onerror="this.src='./assets/images/project-6.png'" />
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 6px;">
            ${p.category}
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 8px; color: var(--text-primary);">
            ${p.title} ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" style="font-size: 0.85rem; margin-left: 6px;">🔗 zayno.io ↗</a>` : ''}
          </h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 14px;">
            ${p.desc}
          </p>
          ${
            p.subApps
              ? `
            <div style="background: rgba(0, 242, 254, 0.05); border: 1px solid var(--border-glow); padding: 10px 14px; border-radius: var(--radius-sm); margin-bottom: 14px;">
              <strong style="font-size: 0.8rem; color: var(--accent-cyan); display: block; margin-bottom: 4px;">Suite Applications:</strong>
              <ul style="font-size: 0.8rem; color: var(--text-secondary); padding-left: 14px; list-style-type: disc;">
                ${p.subApps.map((sa) => `<li>${sa}</li>`).join("")}
              </ul>
            </div>
          `
              : ""
          }
        </div>
        <div class="tag-list">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   7. Render Qemer Projects
   -------------------------------------------------------------------------- */
function renderQemerProjects() {
  const grid = document.getElementById("qemer-projects-grid");
  if (!grid || !window.qemerData) return;

  grid.innerHTML = window.qemerData
    .map(
      (p) => `
      <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <img src="${p.image}" alt="${p.title}" class="card-img-thumb" onerror="this.src='./assets/images/qemer.jpeg'" />
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-emerald); text-transform: uppercase; margin-bottom: 6px;">
            ${p.category}
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; margin-bottom: 8px;">${p.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">${p.desc}</p>
        </div>
        <div class="tag-list">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   8. Render Freelance Projects (Superstar & Food Fight)
   -------------------------------------------------------------------------- */
function renderFreelanceProjects() {
  const grid = document.getElementById("freelance-projects-grid");
  if (!grid || !window.freelanceData) return;

  grid.innerHTML = window.freelanceData
    .map(
      (p) => `
      <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <img src="${p.image}" alt="${p.title}" class="card-img-thumb" onerror="this.src='./assets/images/project-4.png'" />
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-purple); text-transform: uppercase; margin-bottom: 6px;">
            ${p.category}
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; margin-bottom: 8px;">${p.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">${p.desc}</p>
        </div>
        <div class="tag-list">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   9. Render AAU BSc Projects (FixIt & Crime Investigation)
   -------------------------------------------------------------------------- */
function renderAAUBScProjects() {
  const grid = document.getElementById("aau-bsc-projects-grid");
  if (!grid || !window.aauBscData) return;

  grid.innerHTML = window.aauBscData
    .map(
      (p) => `
      <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <img src="${p.image}" alt="${p.title}" class="card-img-thumb" onerror="this.src='./assets/images/logo 1.png'" />
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-amber); text-transform: uppercase; margin-bottom: 6px;">
            ${p.category}
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; margin-bottom: 8px;">${p.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">${p.desc}</p>
        </div>
        <div class="tag-list">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   10. Render Selected Work Showcase & Filtering
   -------------------------------------------------------------------------- */
function renderSelectedProjects() {
  const grid = document.getElementById("selected-projects-grid");
  const filterTabs = document.querySelectorAll("#project-filter-bar .filter-tab");
  if (!grid || !window.projectsData) return;

  function displayProjects(filter = "all") {
    grid.innerHTML = "";
    const filtered = filter === "all"
      ? window.projectsData
      : window.projectsData.filter((item) => item.category.toLowerCase().includes(filter.toLowerCase()));

    filtered.forEach((p) => {
      const card = document.createElement("div");
      card.className = "glass-card";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.justifyContent = "space-between";
      card.innerHTML = `
        <div>
          <img src="${p.image}" alt="${p.title}" class="card-img-thumb" onerror="this.src='./assets/images/project-1.jpg'" />
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-emerald); text-transform: uppercase; margin-bottom: 6px;">
            ${p.category}
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; margin-bottom: 8px;">
            ${p.title} ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" style="font-size: 0.8rem; margin-left: 6px;">↗ zayno.io</a>` : ''}
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">${p.desc}</p>
        </div>
        <div>
          <div class="tag-list" style="margin-bottom: 16px;">
            ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div style="display: flex; gap: 10px;">
            <a href="${p.github}" target="_blank" rel="noopener" class="btn-secondary" style="padding: 6px 14px; font-size: 0.8rem;">
              GitHub ↗
            </a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  displayProjects("all");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      displayProjects(tab.getAttribute("data-pfilter"));
    });
  });
}

/* --------------------------------------------------------------------------
   11. Render Tech Stack
   -------------------------------------------------------------------------- */
function renderTechStack() {
  const container = document.getElementById("tech-stack-container");
  if (!container || !window.techStackData) return;

  container.innerHTML = Object.entries(window.techStackData)
    .map(
      ([category, items]) => `
      <div style="margin-bottom: 24px;">
        <h3 style="font-family: var(--font-heading); font-size: 1.2rem; color: var(--accent-cyan); margin-bottom: 12px;">
          ${category}
        </h3>
        <div class="tag-list">
          ${items.map((item) => `<span class="tech-tag" style="font-size: 0.82rem; padding: 6px 14px;">${item}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   12. Render Timeline
   -------------------------------------------------------------------------- */
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container || !window.timelineData) return;

  container.innerHTML = window.timelineData
    .map(
      (item) => `
      <div style="position: relative; padding-left: 28px; margin-bottom: 30px; border-left: 2px solid var(--border-glow);">
        <div style="position: absolute; left: -7px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--accent-cyan); box-shadow: 0 0 10px var(--accent-cyan);"></div>
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 6px;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan); font-family: var(--font-mono);">
            ${item.period}
          </div>
          ${item.image ? `<img src="${item.image}" alt="${item.org}" style="width: 32px; height: 32px; object-fit: contain; border-radius: 4px;" />` : ''}
        </div>
        <h3 style="font-family: var(--font-heading); font-size: 1.2rem; color: var(--text-primary); margin-bottom: 4px;">
          ${item.role}
        </h3>
        <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px;">
          ${item.org}
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted);">
          ${item.desc}
        </p>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   13. Contact Form Handling
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    if (btn) {
      btn.textContent = "Message Sent ✓";
      btn.style.background = "var(--accent-emerald)";
      btn.style.color = "#fff";
      setTimeout(() => {
        form.reset();
        btn.innerHTML = `Send Message <ion-icon name="paper-plane-outline"></ion-icon>`;
        btn.style.background = "";
        btn.style.color = "";
      }, 3000);
    }
  });
}