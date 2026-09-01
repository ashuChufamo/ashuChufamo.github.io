/**
 * Scroll Animations & Particle Background Configuration
 * Powered by GSAP ScrollTrigger and tsParticles.
 */

document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initGSAPAnimations();
});

function initParticles() {
  if (typeof tsParticles !== "undefined") {
    tsParticles.load("particles-js", {
      fpsLimit: 60,
      particles: {
        number: {
          value: 50,
          density: { enable: true, value_area: 800 }
        },
        color: { value: ["#00f2fe", "#4facfe", "#38ef7d"] },
        shape: { type: "circle" },
        opacity: { value: 0.35, random: true },
        size: { value: 2.5, random: true },
        line_linked: {
          enable: true,
          distance: 140,
          color: "#ffffff",
          opacity: 0.15,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          out_mode: "out"
        }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 160, line_linked: { opacity: 0.4 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    }).catch((err) => {
      console.warn("tsParticles initialization skipped or failed:", err);
    });
  }
}

function initGSAPAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero section entrance
  gsap.from(".hero-content", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".hero-visual-card", {
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out"
  });

  // Animated Count-Up Stats
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-target"), 10) || 0;
    
    ScrollTrigger.create({
      trigger: stat,
      start: "top 85%",
      onEnter: () => {
        gsap.to(stat, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          onUpdate: function () {
            stat.textContent = Math.floor(stat.innerText) + "+";
          }
        });
      },
      once: true
    });
  });

  // Generic card scroll fade-in
  const animateCards = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  };

  animateCards(".glass-card");
}
