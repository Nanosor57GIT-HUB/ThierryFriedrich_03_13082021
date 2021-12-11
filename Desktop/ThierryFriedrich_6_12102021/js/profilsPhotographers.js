//import getData from "./facto.js"

/*export*/ const getData = () => {
  fetch("API/FishEyeData.json").then((response) =>
    response.json().then((data) => {
      const photographers = data.photographers;
      createPhotographsProfils(photographers); 
    })
  );
};

getData();

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
  const photographes = document.querySelector(".photographesProfils");
  photographes.innerHTML = photographersCard;

  
}
//window.location.href = "indexProfils.html";
//onClick=`window.location.href="indexProfils.html`

//https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
//*************************************************************/

//1) Passer l'id sur un éléments avec href
//2) Récupérer l'id et filtrer pour n'afficher que le photographe
//3) regarder et ajouter l'accéssibilité (text et clavier)
//4) lightbox
//5) formulaire modal
