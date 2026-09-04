document.addEventListener('DOMContentLoaded', () => {
    // Confirmación en consola de la carga del JS
    console.log("Portafolio profesional de Javier Colque iniciado correctamente.");

    // Resaltado de navegación activa en scroll (Opcional y funcional)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-bar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = link.getAttribute('href').includes(current) && current !== '' 
                ? 'var(--accent)' 
                : 'var(--text-secondary)';
        });
    });
});