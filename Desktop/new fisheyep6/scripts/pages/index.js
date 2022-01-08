//1 profil
//Appel du fetch avec la fonction getPhotographers
async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const res = await fetch("data/FishEyeData.json", {
    headers: {
      Accept: "application/json",
    },
  });
  
  const data = await res.json();
 // console.log(data.photographers);
  // Retourner le tableau photographers seulement une fois
  return {
    photographers: [...data.photographers],
  };
}

//Récupération des données pour l'affichage dans photographer_section(html)
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

//Récupération des data et affichage en asynchrone
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers); 
}

//Affichage
init();
