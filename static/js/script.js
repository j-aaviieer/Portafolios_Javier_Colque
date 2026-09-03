// Esperar a que el HTML termine de cargar completamente
document.addEventListener('DOMContentLoaded', () => {

    console.log("Portafolio de Javier Colque cargado exitosamente.");

    // 1. Botón Interactivo en el Footer
    const btnSaludo = document.getElementById('btn-saludo');
    const mensajeTexto = document.getElementById('mensaje-interactivo');

    if (btnSaludo && mensajeTexto) {
        btnSaludo.addEventListener('click', () => {
            mensajeTexto.textContent = "¡Gracias por visitar mi portafolio! Estoy listo para seguir aprendiendo en SkillNest y mi liceo.";
            mensajeTexto.style.display = "block";
            btnSaludo.style.display = "none"; // Ocultar el botón tras hacer clic
        });
    }

    // 2. Desplazamiento suave (Smooth Scroll) para la barra de navegación
    const navLinks = document.querySelectorAll('.nav-bar a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});