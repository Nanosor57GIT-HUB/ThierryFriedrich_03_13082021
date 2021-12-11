/* Lorsque l'utilisateur clique sur le bouton,
basculer entre le masquage et l'affichage du contenu de la liste déroulante */
function myFunction() {
  let dropdown = document.getElementById("myDropdown").classList.toggle("show");

  // Ferme la liste déroulante si l'utilisateur clique en dehors de celle-ci
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

function displayListBox() {
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
displayListBox();

const displaySort = document.querySelector(".displayMedia")


