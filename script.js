// Scroll animation for sections
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".feature-box, .about-section, .hero-text");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Future placeholder for contact form validation or animations
