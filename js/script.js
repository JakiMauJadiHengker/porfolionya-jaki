<<<<<<< HEAD
// Add animation on load
window.onload = () => {
  document.querySelector('.hero').classList.add('show');
  document.querySelector('.about').classList.add('show');
};

// Scroll animation
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const triggerPoint = window.innerHeight / 1.2;

  sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < triggerPoint) {
          section.classList.add('show');
      }
  });
});
=======
// Add animation on load
window.onload = () => {
  document.querySelector('.hero').classList.add('show');
  document.querySelector('.about').classList.add('show');
};

// Scroll animation
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const triggerPoint = window.innerHeight / 1.2;

  sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < triggerPoint) {
          section.classList.add('show');
      }
  });
});
>>>>>>> 73e8428cf076d7ca32b48f2c41840ee2edccb51d
