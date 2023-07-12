const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const anywhere = document.querySelector("html");

menuIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  navbar.classList.toggle("navbar-open");
});
anywhere.addEventListener("click", (event) => {
  if (
    !navbar.contains(event.target) &&
    navbar.classList.contains("navbar-open")
  ) {
    navbar.classList.remove("navbar-open");
  }
});
