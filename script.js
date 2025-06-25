function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}
window.addEventListener('scroll', () => {
  const about = document.querySelector('.about-container');
  const sectionTop = about.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    about.classList.add('show');
  }
});

