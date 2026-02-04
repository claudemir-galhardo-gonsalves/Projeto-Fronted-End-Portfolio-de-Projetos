// Variável constante para não alterar seu processo de execução!
const hamburguer = document.querySelector(".btn-hamburguer");
const menuOne = document.querySelector(".menu-one");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    menuOne.classList.toggle('active');
})