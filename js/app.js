window.addEventListener("load", function () {
  const body = document.querySelector("body");
  const navbar = document.querySelector(".header .navbar");
  const navbarLogo = navbar.querySelector(".navbar-logo");
  const navbarToggleOpen = navbar.querySelector(".navbar-toggle-open");
  const navbarToggleClose = navbar.querySelector(".navbar-toggle-close");
  const navbarMenu = navbar.querySelector(".menu");
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      navbar.classList.add("shrink");
      navbarLogo.src = "./img/logo-black.png";
    } else {
      navbar.classList.remove("shrink");
      navbarLogo.src = "./img/logo2-1.png";
    }
  });
  // toggle menu
  navbarToggleOpen.addEventListener("click", function () {
    navbarMenu.classList.add("show");
  });
  navbarToggleClose.addEventListener("click", function () {
    navbarMenu.classList.remove("show");
  });
});
