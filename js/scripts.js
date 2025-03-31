document.addEventListener("DOMContentLoaded", () => {
    // Detectar los elementos con la clase ".experiencia-item"
    const elementos = document.querySelectorAll(".experiencia-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    elementos.forEach(el => observer.observe(el));

    // Detectar la sección de habilidades
    const habilidadesSection = document.getElementById("habilidades");

    const habilidadesObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                habilidadesSection.classList.add("visible");
            } else {
                habilidadesSection.classList.remove("visible");
            }
        });
    }, { threshold: 0.3 });

    habilidadesObserver.observe(habilidadesSection);

    // Manejo del envío del formulario de contacto
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Tu mensaje ha sido enviado con éxito. ¡Gracias por contactarme! 🚀");
    });
});
