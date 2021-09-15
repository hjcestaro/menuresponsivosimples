const hamburguer = document.getElementById("hamburguer");
const navUl = document.getElementById("navegacao");

hamburguer.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
