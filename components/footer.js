(function showFooterComponent() {
  const footerContainerEl = document.createElement("div");
  footerContainerEl.className = "footer__container";

  footerContainerEl.innerHTML = `<p class="footer__logo">Wesley</p>
  <div class="footer__sections">
    <div class="footer__section">
      <a href="./index.html"><img src="./images/home.svg" /></a>
    </div>
    <div class="footer__section">
      <a href="./servicios.html"><img src="./images/services.svg" /></a>
    </div>
    <div class="footer__section">
      <a href="./contacto.html"><img src="./images/contact.svg" /></a>
    </div>
  </div>
  <div class="footer__social">
    <a href="https://www.linkedin.com/"><img src="./images/linkedin.svg" /></a>
    <a href="https://github.com/"><img src="./images/github.svg" /></a>
    <a href="https://twitter.com/"><img src="./images/twitter.svg" /></a>
  </div>
  <p class="footer__copyright">©2023 - Wesley</p>`;

  const footerEl = document.querySelector(".footer");
  footerEl.appendChild(footerContainerEl);
})();
