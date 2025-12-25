const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // Alterna a classe 'active' no menu e no ícone
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Opcional: Fechar o menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));