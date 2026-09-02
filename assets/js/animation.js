// -----------------------------------------------------
// Particles
// -----------------------------------------------------

tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffc700"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  background: {
    color: "#1e1e1e",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  }
});

// -----------------------------------------------------
// Animations
// -----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the sidebar
  gsap.from(".sidebar", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Animate the main content
  gsap.from(".main-content", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Animate the service items
  gsap.from(".service-item", {
    scrollTrigger: {
      trigger: ".service-list",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out"
  });

  // Animate the testimonials
  gsap.from(".testimonials-item", {
    scrollTrigger: {
      trigger: ".testimonials-list",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out"
  });
});
