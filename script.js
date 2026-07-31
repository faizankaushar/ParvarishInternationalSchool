const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}

const cards = Array.from(document.querySelectorAll('.program-card'));
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let activeIndex = 0;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.toggle('active', index === activeIndex);
    card.style.display = index === activeIndex ? 'block' : 'none';
  });
}

if (cards.length) {
  updateCarousel();

  prevBtn?.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  nextBtn?.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % cards.length;
    updateCarousel();
  });
}

// Leader carousel (middle slideshow)
(() => {
  const slides = Array.from(document.querySelectorAll('.leader-carousel .slide'));
  if (!slides.length) return;
  let idx = 0;
  const show = (i) => {
    slides.forEach((s, j) => s.classList.toggle('active', j === i));
  };
  show(idx);
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    show(idx);
  }, 3000);
})();
