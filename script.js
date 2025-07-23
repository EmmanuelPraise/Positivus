const header = document.querySelector(".header");
      const toggleBtn = document.querySelector(".nav-toggle");
      const navMenu = document.querySelector(".nav-menu");
      let isMenuOpen = false;

      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          if (!isMenuOpen) {
            header.classList.remove("scrolled");
          }
        }
      });

      toggleBtn.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;
        navMenu.classList.toggle("active");
        toggleBtn.textContent = isMenuOpen ? "×" : "☰";
        toggleBtn.setAttribute("aria-expanded", isMenuOpen);
        if (isMenuOpen) {
          header.classList.add("menu-open");
        } else {
          header.classList.remove("menu-open");
          if (window.scrollY <= 50) {
            header.classList.remove("scrolled");
          }
        }
      });

let pixel_value = 32; // Example pixel value
let base_html_font_size = 16; // Base font size in pixels, typically 16

let rem_value = pixel_value / base_html_font_size
console.log(rem_value + " rem");