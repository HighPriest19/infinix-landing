// ======== script.js ========

const sections = document.querySelectorAll('.product-section');

const revealSections = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
