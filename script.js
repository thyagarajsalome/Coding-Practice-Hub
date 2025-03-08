// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile menu
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const targetSelector = card.getAttribute("data-target");
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });

    // Also attach to the button inside the card
    const button = card.querySelector("button");
    if (button) {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        const targetSelector = card.getAttribute("data-target");
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });

  // Smooth scroll for nav links and hero button
  const navItems = document.querySelectorAll(".nav-links a, .hero-btn");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = item.getAttribute("href");
      if (href && href.startsWith("#")) {
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
