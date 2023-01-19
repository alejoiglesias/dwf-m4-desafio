function sortDataAsset(data) {
  const asset = data.includes.Asset.sort((a, b) =>
    a.fields.title > b.fields.title
      ? 1
      : b.fields.title > a.fields.title
      ? -1
      : 0
  );

  return asset;
}

function addDataFieldsToServicesHomeSection(data, asset, servicesEl) {
  const servicesTitleEl = servicesEl.querySelector(".services__title--white");
  servicesTitleEl.textContent = data.items[4].fields.title;

  const servicesSubtitleEl = servicesEl.querySelector(".services__title--blue");
  servicesSubtitleEl.textContent = data.items[4].fields.subtitle;

  const servicesRocketImgEl = servicesEl.querySelector(".services__bag");
  servicesRocketImgEl.src = asset[5].fields.file.url;

  const servicesShadowImgEl = servicesEl.querySelector(".services__shadow");
  servicesShadowImgEl.src = asset[6].fields.file.url;
}

function addDataFieldsToServicesListSection(data, asset, servicesEl) {
  const servicesListEl = servicesEl.querySelector(".services__list");
  servicesListEl.style.backgroundImage = `url(${asset[3].fields.file.url})`;

  const servicesImgEl = servicesEl.querySelectorAll(".services__img");
  servicesImgEl.forEach((element, index) => {
    element.src = asset[index].fields.file.url;
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

  const servicesArrowEl = servicesEl.querySelector(".services__arrow");
  servicesArrowEl.src = asset[4].fields.file.url;

  const servicesLinkEl = servicesEl.querySelector(".services__link");
  servicesLinkEl.textContent = data.items[3].fields.title;
}

(function getDataFromContentfulForServicesSection() {
  fetch(
    "https://cdn.contentful.com/spaces/9oe4n1q93o6g/environments/master/entries?access_token=3dgn4NMvNHrOVH3Hftdmt_EqlRYkQ88c9dSzIt9enC8&content_type=services&order=sys.createdAt"
  )
    .then((response) => response.json())
    .then((data) => {
      const servicesEl = document.querySelector(".services");

      const asset = sortDataAsset(data);

      addDataFieldsToServicesHomeSection(data, asset, servicesEl);
      addDataFieldsToServicesListSection(data, asset, servicesEl);
    });
})();
