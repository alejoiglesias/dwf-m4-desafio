(function showHeaderComponent() {
  const headerContainerEl = document.createElement("div");
  headerContainerEl.className = "header__container";

  headerContainerEl.innerHTML = `<p class="header__logo">Wesley</p>
  <img src="./images/burger.svg" class="header__burger" />
  <div class="header__window">
    <img src="./images/x.svg" class="header__close" />
    <div class="header__menu">
      <a href="./portfolio.html" class="header__page">Portfolio</a>
      <a href="./servicios.html" class="header__page">Servicios</a>
      <a href="./contacto.html" class="header__page">Contacto</a>
    </div>
  </div>
  <div class="header__sections">
    <a href="./portfolio.html" class="header__section">Portfolio</a>
    <a href="./servicios.html" class="header__section">Servicios</a>
    <a href="./contacto.html" class="header__section">Contacto</a>
  </div>`;

  const headerEl = document.querySelector(".header");
  headerEl.appendChild(headerContainerEl);
})();

(function listenHeaderComponent() {
  const headerEl = document.querySelector(".header");
  const headerWindowEl = headerEl.querySelector(".header__window");

  const headerBurgerEl = headerEl.querySelector(".header__burger");
  headerBurgerEl.addEventListener("click", () => {
    headerWindowEl.style.display = "inherit";
  });

  const headerCloseEl = headerEl.querySelector(".header__close");
  headerCloseEl.addEventListener("click", () => {
    headerWindowEl.style.display = "";
  });
})();
