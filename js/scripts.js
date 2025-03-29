document.addEventListener("DOMContentLoaded", () => {
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
});

document.addEventListener("DOMContentLoaded", () => {
    const habilidadesSection = document.getElementById("habilidades");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                habilidadesSection.classList.add("visible");
            } else {
                habilidadesSection.classList.remove("visible");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(habilidadesSection);
});
