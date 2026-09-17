// 3. Funcionalidad: Filtrado dinámico de proyectos
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase 'active' de todos los botones
        filterBtns.forEach(button => button.classList.remove('active'));
        // Agregar 'active' al botón clickeado
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                // Pequeña animación de entrada
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll("main > *, section, article, .card");

  elementsToAnimate.forEach(el => el.classList.add("fade-in"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elementsToAnimate.forEach(el => observer.observe(el));
});