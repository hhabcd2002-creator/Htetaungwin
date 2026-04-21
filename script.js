// 1. Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// 2. Scroll to Top
const scrollBtn = document.getElementById("scrollToTop");
window.onscroll = () => {
    if (window.scrollY > 300) scrollBtn.style.display = "block";
    else scrollBtn.style.display = "none";
};
scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 3. Formspree Handling
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.onsubmit = async (e) => {
    e.preventDefault();
    status.innerHTML = "Sending...";
    const data = new FormData(e.target);
    const response = await fetch(e.target.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
        status.innerHTML = "Success! Message sent.";
        status.style.color = "#10b981";
        form.reset();
    } else {
        status.innerHTML = "Error sending message.";
        status.style.color = "#ef4444";
    }
};
