// 2 medias


async function getData(photographerId) {
  const res = await fetch("data/FishEyeData.json", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  //console.log(data);
  const photographer = data.photographers.find((p) => p.id === photographerId);
  const portfolio = data.media
    .filter((obj) => obj.photographerId === photographerId)
    .map((obj) => obj);
 //   console.log(portfolio);
   const totalLikes = portfolio
    .reduce((acc, curr) => {
      return acc + curr.likes;
    }, 0);
  console.log(totalLikes);
  return { photographer, portfolio, totalLikes };
}

//profil medias
function displayPhotographerInfo(photographer) {
  const { name, portrait, city, country, price, tagline } = photographer;
  const picture = `assets/photographers/${portrait}`;
  const header = document.querySelector(".photograph-header");
  header.innerHTML = `
        <div class="card2-bio">
          <h2 class="photographer-name">${name}</h2>
          <p class="location">${city}, ${country}</p>
          <p class="tagline">${tagline}</p>
        </div>
        <button class="contact_button">
          Contactez-moi
        </button>
        <img src=${picture} alt="${name}" class="portraitMedia">
`;
}
 
function displayMedia(portfolioArray, photographer) {
 // console.log(portfolioArray);
  const portfolioSection = document.querySelector(".portfolio-section");
  const lightboxSection = document.querySelector(".slider-media-container");
 formulaire();
  portfolioArray.forEach((portfolioItem) => {
    const mediaModel = mediaFactory(portfolioItem, photographer);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
  //  const mediaSlidesDOM = mediaModel.getMediaSlidesDOM();
    portfolioSection.appendChild(mediaCardDOM);
  //  lightboxSection.appendChild(mediaSlidesDOM);
  });

 // enableLightboxListeners();
}

async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const photographerId = parseInt(urlParams.get("photographer"));
  const { photographer, portfolio, totalLikes } = await getData(photographerId);
  //console.log(photographer);
  //console.log(portfolio);
  //console.log(totalLikes);
  displayPhotographerInfo(photographer);
  displayMedia(portfolio, photographer);
}

init();
