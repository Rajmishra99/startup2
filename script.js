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
// Hero Slider Logic
const slider = document.getElementById("hero-slider");
const images = ["img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg"];
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  slider.src = images[current];
}, 5000);
