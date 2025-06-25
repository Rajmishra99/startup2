function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

window.addEventListener('scroll', () => {
  const section = document.querySelector('.about-container');
  const top = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (top < screenPosition - 100) {
    section.classList.add('show');
  }
});


