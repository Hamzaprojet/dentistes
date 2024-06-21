const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
  const nav = document.querySelector("nav");

  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 400) {
      nav.style.top = 0;  // Ajout des unités 'px'
    }
  });