window.addEventListener('scroll', () => {
  const section = document.querySelector('.about-container');
  const top = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (top < screenHeight - 100) {
    section.classList.add('show');
  }
});
