(function showContactComponent() {
  const contactContainerEl = document.createElement("div");
  contactContainerEl.className = "contact__container";

  contactContainerEl.innerHTML = `<h2 class="contact__title">Escribime</h2>
  <form class="contact__form">
  <div class="contact__fields">
    <div class="contact__field">
      <label for="" class="contact__label">Nombre</label>
      <input name="name" type="text" class="contact__input" placeholder="Tu nombre" />
    </div>
    <div class="contact__field">
      <label for="" class="contact__label">Email</label>
      <input name="email" type="email" class="contact__input" placeholder="tu@mail.com" />
    </div>
    </div>
    <div class="contact__field">
      <label for="" class="contact__label">Mensaje</label>
      <textarea name="msg" class="contact__textarea"></textarea>
    </div>
    <button class="contact__button">
      Enviar
      <img src="./images/send.png" />
    </button>
  </form>`;

  const contactEl = document.querySelector(".contact");
  contactEl.appendChild(contactContainerEl);
})();

(function listenFormForContactComponent() {
  const formEl = document.querySelector(".contact__form");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    const body = {
      to: "alejoiglesias@outlook.com",
      message: `Nombre: ${value.name}
      Email: ${value.email}
      Mensaje: ${value.msg}`,
    };

    sendData(body);

    formEl.reset();
  });
})();

function sendData(data) {
  fetch("https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
}
