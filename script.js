// Form Submission Alert
const form = document.getElementById("contact-form");
form.onsubmit = async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button");
    btn.innerText = "Sending...";
    
    const data = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert("Success! Your message was sent to Mr. Htet Aung Win.");
        form.reset();
        btn.innerText = "Send Message";
    } else {
        alert("Oops! There was a problem. Please try again.");
        btn.innerText = "Send Message";
    }
};

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
