function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    const menuButton = document.getElementById("menuButton");

    // Alterna a classe 'open' para o menu lateral
    navMenu.classList.toggle("open");

    // Alterna a classe 'active' para o botão do menu
    menuButton.classList.toggle("active");
}
function abrirGaleria() {
    window.location.href = "galeria.html";
}