


/*basculer entre le masquage et l'affichage du contenu de la liste déroulante */
function myDropDown() {
  let dropdown = document.getElementById("myDropdown").classList.toggle("show");
  // Ferme la liste déroulante au click
  window.onclick = function (event) {
   // console.log("ok");
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

/*function displayListBox(data, photographers) {
  let sortById = data.filter((data) => data.photographerId == extractId);

  let sortByDates = sortById.map((data) => data.date);
  sortByDates.sort();

  let sortByTitle = sortById.map((data) => data.title);
  sortByTitle.sort();
}*/

  // console.log(sortById);
  // console.log(sortByDates);
  //console.log(sortByTitle);

 



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

  