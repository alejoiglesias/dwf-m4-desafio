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

function addDataFieldsToPortfolioHomeSection(data, asset, portfolioEl) {
  const portfolioTitleEl = portfolioEl.querySelector(
    ".portfolio__title--white"
  );
  portfolioTitleEl.textContent = data.items[3].fields.title;

  const portfolioSubtitleEl = portfolioEl.querySelector(
    ".portfolio__title--blue"
  );
  portfolioSubtitleEl.textContent = data.items[3].fields.subtitle;

  const portfolioRocketImgEl = portfolioEl.querySelector(".portfolio__bag");
  portfolioRocketImgEl.src = asset[5].fields.file.url;

  const portfolioShadowImgEl = portfolioEl.querySelector(".portfolio__shadow");
  portfolioShadowImgEl.src = asset[6].fields.file.url;
}

function addDataFieldsToPortfolioListSection(data, asset, portfolioEl) {
  const portfolioListEl = portfolioEl.querySelector(".portfolio__list");
  portfolioListEl.style.backgroundImage = `url(${asset[3].fields.file.url})`;

  const portfolioImgEl = portfolioEl.querySelectorAll(".portfolio__img");
  portfolioImgEl.forEach((element, index) => {
    element.src = asset[index].fields.file.url;
  });

  const portfolioSubtitleEl = portfolioEl.querySelectorAll(
    ".portfolio__subtitle"
  );
  portfolioSubtitleEl.forEach((element, index) => {
    element.textContent = data.items[index].fields.title;
  });

  const portfolioTextEl = portfolioEl.querySelectorAll(".portfolio__text");
  portfolioTextEl.forEach((element, index) => {
    element.textContent =
      data.items[index].fields.text.content[0].content[0].value;
  });

  const portfolioArrowEl = portfolioEl.querySelector(".portfolio__arrow");
  portfolioArrowEl.src = asset[4].fields.file.url;

  const portfolioLinkEl = portfolioEl.querySelector(".portfolio__link");
  portfolioLinkEl.textContent = data.items[4].fields.title;
}

(function getDataFromContentfulForPortfolioSection() {
  fetch(
    "https://cdn.contentful.com/spaces/9oe4n1q93o6g/environments/master/entries?access_token=3dgn4NMvNHrOVH3Hftdmt_EqlRYkQ88c9dSzIt9enC8&content_type=works&order=sys.createdAt"
  )
    .then((response) => response.json())
    .then((data) => {
      const portfolioEl = document.querySelector(".portfolio");

      const asset = sortDataAsset(data);

      addDataFieldsToPortfolioHomeSection(data, asset, portfolioEl);
      addDataFieldsToPortfolioListSection(data, asset, portfolioEl);
    });
})();
