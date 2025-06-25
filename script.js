function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}
// Fade-in on scroll
window.addEventListener('scroll', () => {
  const about = document.querySelector('.about-container');
  const sectionTop = about.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionTop < screenPosition) {
    about.classList.add('show');
  }
});
