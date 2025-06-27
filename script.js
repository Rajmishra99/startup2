// Spinner
document.addEventListener('DOMContentLoaded', () => {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        setTimeout(() => spinner.classList.remove('show'), 1);
    }
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar.sticky-top');
    if (window.scrollY > 300) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-100px';
    }
});

// Back to Top
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Swiper Carousel
const swiper = new Swiper('.header-carousel', {
    autoplay: { delay: 5000 },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
