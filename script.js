// Simple Formspree Handler
const form = document.getElementById("contact-form");
form.onsubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch(e.target.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
        alert("Success! Your message has been sent to Mr. Htet Aung Win.");
        form.reset();
    } else {
        alert("Oops! There was a problem sending your message.");
    }
};

// Smooth Scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
