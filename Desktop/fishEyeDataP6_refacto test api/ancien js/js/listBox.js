

 
/*basculer entre le masquage et l'affichage du contenu de la liste déroulante */
function myFunction() {
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

const urlListBox = "API/FishEyeData.json";
fetch(urlListBox).then((response) =>
  response.json().then(function (data) {
    let photographers = data.photographers;
    let medias = data.media;
    displayListBox(medias);
  })
);


function displayListBox(medias) {
  let sortByLikes =  medias
    .filter((medias) => medias.photographerId == extractId)
  
//console.log(sortByLikes);

  document.querySelector(".dropdown").innerHTML = `
  <div class="containerListBox">
  <div class="sortList">
  <p class="trierTitle">Trier par</p>
  </div>
  <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Popularités</i></button>
   
  <div id="myDropdown" class="dropdown-content">
    <a href="">Date</a>
    <a href="">Likes</a>
  </div>
  </div>
  </div>
  `;
}
//displayListBox();




