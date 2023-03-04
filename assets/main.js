document.addEventListener("DOMContentLoaded", function () {
  // toggle navbar
  const navbarToggler = document.querySelector(".navbar-toggler");

  // Get the navbar collapse element
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Add event listener to the navbar toggler button
  navbarToggler.addEventListener("click", function () {
    // Toggle the "show" class on the navbar collapse element
    navbarCollapse.classList.toggle("show");
  });
});
