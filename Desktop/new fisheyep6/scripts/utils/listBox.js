/*async function getData(photographerId) {
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
    console.log(portfolio);
  const totalLikes = portfolio.reduce((acc, curr) => {
    return acc + curr.likes;
  }, 0);
  return { photographer, portfolio, totalLikes };
}*/


/*basculer entre le masquage et l'affichage du contenu de la liste déroulante */
function myDropDown() {
  let dropdown = document.getElementById("myDropdown").classList.toggle("show");
  // Ferme la liste déroulante au click
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
}

fetch("API/FishEyeData.json").then((response) =>
  response.json().then(function (data) {
    let photographers = data.photographers;
    let medias = data.media;
    displayListBox(medias, photographers);
  })
);

function displayListBox(medias, photographers) {
  let sortById = medias.filter((medias) => medias.photographerId == extractId);

  let sortByDates = sortById.map((medias) => medias.date);
  sortByDates.sort();

  let sortByTitle = sortById.map((medias) => medias.title);
  sortByTitle.sort();

  // console.log(sortById);
  // console.log(sortByDates);
  //console.log(sortByTitle);

  /*
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
        <button class="contact_button" onclick="displayModal()">
          Contactez-moi
        </button>
        <img src=${picture} alt="${name}" class="portraitMedia">
`;
}
*/


  document.querySelector(".dropdown").innerHTML = `
  <div class="containerListBox">
  <div class="sortList">
    <p class="trierTitle">Trier par</p>
  </div>
  <div class="dropdown">
    <button onclick="myDropDown()" class="dropbtn" aria label="Popularité">Popularité</i></button>
   
  <div id="myDropdown" class="dropdown-content">
    <a href="" class="sortDates" aria-labelledby="Trier par dates">Date</a>
    <a href="" class=""sortLikes aria-labelled="Trier par titre">Titre</a>
  </div> 
  </div>
  </div>
  `;

function mediaFactory(data, photographer) {
  const { id, date, image, likes, title, video } = data;
const {name} = photographer;






  /*  const BoxDisplays = document.getElementsByClassName("cardsMediaslink");
//console.log(BoxDisplays);
 const DateslistBox = document.querySelector(".sortDates");
 DateslistBox.onclick = () => { 
   BoxDisplays.sortByDates.sort();

   };
 


}


  /* const BoxDisplays = document.getElementsByClassName("cardsMediaslink");
   //console.log(BoxDisplays);
   const DateslistBox = document.querySelector(".sortDates");
   DateslistBox.onclick = () => {
     BoxDisplays.sortByDates.sort();
   };*/
}
  