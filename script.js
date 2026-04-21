// 1. Particle.js Configuration (Background Effect From Video)
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#c5a059" },
    shape: { type: "circle" },
    opacity: { value: 0.4, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 2, random: true, anim: { enable: true, speed: 4, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: "#c5a059", opacity: 0.2, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
    modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 3 } },
  },
  retina_detect: true,
});

// 2. Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Formspree Handling with Visual Status
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.onsubmit = async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button");
    btn.innerText = "Processing Inquiry...";
    btn.disabled = true;

    const data = new FormData(e.target);
    const response = await fetch(e.target.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        status.innerHTML = "Formal inquiry received. Check direct email for response.";
        status.style.color = "#10b981"; // Success Green
        form.reset();
        btn.innerText = "Submit Message";
        btn.disabled = false;
    } else {
        status.innerHTML = "An error occurred. Please contact via direct email/phone.";
        status.style.color = "#ef4444"; // Error Red
        btn.innerText = "Submit Message";
        btn.disabled = false;
    }
};

// 4. Scroll-triggered animation for cards
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
    card.style.transition = "0.6s ease-out";
    observer.observe(card);
});
