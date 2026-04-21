// Particle Background Effect
particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#c5a059" },
    opacity: { value: 0.3, random: true },
    size: { value: 2, random: true },
    line_linked: { enable: true, distance: 150, color: "#c5a059", opacity: 0.1, width: 1 },
    move: { enable: true, speed: 1.5, direction: "none", random: true, out_mode: "out" },
  }
});

// Scroll Reveal Animation
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.8s ease-out";
    observer.observe(card);
});
