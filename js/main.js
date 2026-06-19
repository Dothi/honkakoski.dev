const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach((el, i) => {
  el.style.transitionDelay = `${i * 100}ms`;
  observer.observe(el);
});

document.querySelectorAll('.exp-role').forEach(card => {
  card.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.exp-role.active').forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.exp-role.active').forEach(c => c.classList.remove('active'));
});
