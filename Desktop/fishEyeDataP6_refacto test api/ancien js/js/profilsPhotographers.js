const urlProfils = "API/FishEyeData.json";
fetch(urlProfils).then((response) =>
  response.json().then(function (data) {
    let photographers = data.photographers;
    createPhotographsProfils(photographers);
       
  })
);

function createPhotographsProfils(photographers) {
  const photographersCard = photographers
    .map((photographers) => {
      const tags = photographers.tags;
      const tagsArray = tags
        .map((tags) => {
          return `<a aria-label='Tag' href="" class="header__nav__link">#${tags}</a>`;
        })
        .join("");

      return `
        <article class="card">    
            <a id="${photographers.id}" class="card__general-link" href="mediasbyprofil.html?id=${photographers.id}" aria-label='${photographers.name}'>
              <img class="face" src="assets/IDPhotographes/${photographers.portrait}" alt="">
              <h2 aria='hidden' class="card__name">${photographers.name}</h2>
            </a>
          <p class="card__location">${photographers.city}, ${photographers.country}</p>
          <p class="card__tagline">${photographers.tagline}</p>
          <p class="card__price">${photographers.price}&euro;/jour</p>
            <div class="tag">${tagsArray}</div>     
        </article>`;
    })
    .join("");
  const Profils = document.querySelector(".photographesProfils");
  Profils.innerHTML = photographersCard;
}


//https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
//*************************************************************/


