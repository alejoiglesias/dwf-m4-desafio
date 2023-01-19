function addDataFieldsToWelcomeSection(data) {
  const welcomeEl = document.querySelector(".welcome");

  const welcomeTitleEl = welcomeEl.querySelector(".welcome__title--white");
  welcomeTitleEl.textContent = data.items[0].fields.title;

  const welcomeSubtitleEl = welcomeEl.querySelector(".welcome__title--blue");
  welcomeSubtitleEl.textContent = data.items[0].fields.subtitle;

  const welcomeRocketImgEl = welcomeEl.querySelector(".welcome__rocket");
  welcomeRocketImgEl.src = data.includes.Asset[0].fields.file.url;

  const welcomeShadowImgEl = welcomeEl.querySelector(".welcome__shadow");
  welcomeShadowImgEl.src = data.includes.Asset[1].fields.file.url;
}

function getDataFromContentfulForWelcomeSection() {
  fetch(
    "https://cdn.contentful.com/spaces/9oe4n1q93o6g/environments/master/entries?access_token=3dgn4NMvNHrOVH3Hftdmt_EqlRYkQ88c9dSzIt9enC8&content_type=welcome"
  )
    .then((response) => response.json())
    .then((data) => {
      addDataFieldsToWelcomeSection(data);
    });
}

function addDataFieldsToAboutSection(data) {
  const aboutEl = document.querySelector(".about");

  const aboutTitle = aboutEl.querySelector(".about__title");
  aboutTitle.textContent = data.items[0].fields.title;

  const aboutText = aboutEl.querySelector(".about__text");
  aboutText.textContent = data.items[0].fields.text.content[0].content[0].value;

  const aboutSmallEl = aboutEl.querySelector(".about__small");
  aboutSmallEl.src = data.includes.Asset[0].fields.file.url;

  const aboutBigEl = aboutEl.querySelector(".about__big");
  aboutBigEl.src = data.includes.Asset[1].fields.file.url;
}

function getDataFromContentfulForAboutSection() {
  fetch(
    "https://cdn.contentful.com/spaces/9oe4n1q93o6g/environments/master/entries?access_token=3dgn4NMvNHrOVH3Hftdmt_EqlRYkQ88c9dSzIt9enC8&content_type=about"
  )
    .then((response) => response.json())
    .then((data) => {
      addDataFieldsToAboutSection(data);
    });
}

function addDataFieldsToServicesSection(data) {
  const servicesEl = document.querySelector(".services");

  const shortDataAsset = data.includes.Asset.sort((a, b) =>
    a.fields.title > b.fields.title
      ? 1
      : b.fields.title > a.fields.title
      ? -1
      : 0
  );

  const servicesListEl = servicesEl.querySelector(".services__list");
  servicesListEl.style.backgroundImage = `url(${shortDataAsset[3].fields.file.url})`;

  const servicesTitleWhite = servicesEl.querySelector(
    ".services__title--white"
  );
  servicesTitleWhite.textContent = data.items[4].fields.title.substring(0, 3);

  const servicesTitleBlue = servicesEl.querySelector(".services__title--blue");
  servicesTitleBlue.textContent = data.items[4].fields.subtitle;

  const servicesImgEl = servicesEl.querySelectorAll(".services__img");
  servicesImgEl.forEach((element, index) => {
    element.src = shortDataAsset[index].fields.file.url;
  });

  const servicesSubtitleEl = servicesEl.querySelectorAll(".services__subtitle");
  servicesSubtitleEl.forEach((element, index) => {
    element.textContent = data.items[index].fields.title;
  });

  const servicesTextEl = servicesEl.querySelectorAll(".services__text");
  servicesTextEl.forEach((element, index) => {
    element.textContent =
      data.items[index].fields.text.content[0].content[0].value;
  });
}

function getDataFromContentfulForServicesSection() {
  fetch(
    "https://cdn.contentful.com/spaces/9oe4n1q93o6g/environments/master/entries?access_token=3dgn4NMvNHrOVH3Hftdmt_EqlRYkQ88c9dSzIt9enC8&content_type=services&order=sys.createdAt"
  )
    .then((response) => response.json())
    .then((data) => {
      addDataFieldsToServicesSection(data);
    });
}

(function main() {
  getDataFromContentfulForWelcomeSection();

  getDataFromContentfulForAboutSection();

  getDataFromContentfulForServicesSection();
})();
