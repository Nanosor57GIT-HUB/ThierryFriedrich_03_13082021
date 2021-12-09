/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  let dropdown = document.getElementById("myDropdown").classList.toggle("show");
//console.log(dropdown);
  // Close the dropdown if the user clicks outside of it
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

function displayBox() {
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
displayBox();
