// Form Submission
const form = document.getElementById("contact-form");
form.onsubmit = async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button");
    btn.innerText = "Processing Inquiry...";

    const data = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert("Success! Your academic inquiry has been sent to Mr. Htet Aung Win.");
        form.reset();
        btn.innerText = "Send Message";
    } else {
        alert("Error! Please contact via direct email or phone.");
        btn.innerText = "Send Message";
    }
};

// Intersection Observer for Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s ease-out";
    observer.observe(card);
});
