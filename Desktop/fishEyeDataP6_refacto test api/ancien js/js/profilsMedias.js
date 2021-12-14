//Récupération de la chaine de requete dans l'url
const queryString_url_id = window.location.search;
// console.log(queryString_url_id);

//Extraction de l'id dans la chaine de requete
const urlSearchParams = new URLSearchParams(queryString_url_id);
//console.log(urlSearchParams);

const extractId = urlSearchParams.get("id");
// console.log(extractId);

const urlProfilMedias = "API/FishEyeData.json";
fetch(urlProfilMedias).then((response) =>
  response.json().then(function (data) {
    let photographers = data.photographers;
    createPhotographsMedia(photographers);
  })
);


    function createPhotographsMedia(photographersID) {
      const photographers = photographersID.filter(
        (photographers) => photographers.id == extractId
      );

      const photographersCard = photographers
        .map((photographers) => {
          const tags = photographers.tags;
          const tagsArray = tags
            .map((tags) => {
              return `<a aria-label='Tag' href="" class="header__nav__link">#${tags}</a>`;
            })
            .join("");

          return `
    <div class="logoMediaFishEye">
    <a href="index.html" aria-label="Page home" title="Retour à l'accueil">
          <img class="logo" src="assets/logo/logo.png" alt="FisEye_logo" />
        </a>
        </div>

        <div class="containerProfilMedia">
        <div class="cardProfilMedia">
        <div class="profilFace">
        <a id="${photographers.id}" class="card__general-link" href="?id=${photographers.id}" aria-label='${photographers.name}' >
        <img class="faceMedia" src="assets/IDPhotographes/${photographers.portrait}" alt="${photographers.name}">
        </a>
        </div>
        <div class="contact">
        <button id="contact_btn" title="Contact Me">Contactez-moi</button>
        </div>
        <div class="profilTitle">
        <h2 aria='hidden' class="profilNameMedia">${photographers.name}</h2>
        <p class="locationMedia">${photographers.city}, ${photographers.country}</p>
        <p class="card__tagline">${photographers.tagline}</p>
        </div> 
          </div>        
          </div> 
        `;
        })
        .join("");
      const photographes = document.querySelector(".profilsMedias");
      photographes.innerHTML = photographersCard;

      //Open modalForm by button "Contactez-moi"
      const Modal = document.querySelector(".modal");
      const Contactbtn = document.querySelector("#contact_btn");
      Contactbtn.onclick = () => {
        Modal.style.display = "block";

        //Close modal form by cross
        const CloseModal = document.querySelector(".formClose");
        CloseModal.onclick = () => {
          Modal.style.display = "none";
        };

        //Close ModalForm
        const EnvoyerBtn = document.querySelector(".btn-Envoyer");
        EnvoyerBtn.onclick = (e) => {
          Modal.style.display = "none";
          e.preventDefault();
          //alert ("Votre demande à bien été envoyée !");
          //console.log("ok");
        };
      };
    }
  

