

const selectSort = document.querySelector(".selectBox");

selectSort.innerHTML = `<div class="works-sort">
<div>
    <p class="sort-title">Trier par</p>
    </div>

    <div id="sort-wrapper">

    <div class="sort-base">
<button id="select-first-option" class="select-option">
  <span id="select-first-option-text">Popularité</span>
</button>
</div>


<div id="select-block-options" role="listbox">
  <button  class="select-option">
     Date
  </button>
  <button  class="select-option">
     Titre
  </button>
</div>

  </div
</div> 
    `;

  /*///////////////////////////////////////////////////////////////////////*/  
    let isOpen = false;

    const selectOptions = document.querySelector("#select-block-options");

    const firstButtonText = document.querySelector("#select-first-option-text");

    const optionsButtons = selectOptions.querySelectorAll("button");

    const select = document.querySelector(".sort-base");
      
//*const sel = document.querySelector(".select-option")

    document
      .querySelector("#select-first-option")
      .addEventListener("click", () => {
        if (isOpen === false) {
          // On ouvre le faux select

          selectOptions.style.display = "block";
          select.style.borderRadius = "7px 7px 0 0";

          isOpen = true;

          return handleButtonsOptions();
        }

        if (isOpen === true) {
          return closeSelect();
        }
      });

    function closeSelect() {
      // On ferme le faux select

      selectOptions.style.display = "none";
       select.style.borderRadius = "7px";

      return (isOpen = false);
    }

    function handleButtonsOptions() {
      optionsButtons.forEach((button) => {
        button.onclick = () => {
          const buttonText = button.textContent;

          button.innerHTML = firstButtonText.textContent;

          firstButtonText.innerHTML = buttonText;

          return closeSelect();
        };
      });
    }
    /*////////////////////////////////////////////////////////////////////*/

        function sortData(data, photographer, totalLikes, dayPrice) {
       

         selectOptions.addEventListener("click", function (e) {
           console.log(selectOptions);

           function tri(data) {
             if (e.target.innerHTML === "Popularité") {
               const triPopularite = data.sort((a, b) => {
                 return a.likes > b.likes ? 1 : -1;
               });

               displayMedia(triPopularite, photographer);
             }

             if (e.target.innerHTML === "Date") {
               const triDate = data.sort((a, b) => {
                 return a.date > b.date ? 1 : -1;
               });

               displayMedia(triDate, photographer);
             }

             if (e.target.innerHTML === "Titre") {
               const triTitre = data.sort((a, b) => {
                 return a.title > b.title ? 1 : -1;
               });

               displayMedia(triTitre, photographer);
             }

             likesInfos(totalLikes, dayPrice);
             enableLightboxListeners();
             handleButtonsOptions();
           }

           tri(data);
         });
        }


        ///////////////////////////Code à ajouter///////////////////////////////


        /*
        <div id="sort-wrapper">
   //////////////////////////////////////////     <ul  class="reserved" tabindex = "0">
        <div class="sort-base">
                <li class="sort-btn" id="sort-btn" tabindex = "1">Popularité</li>
                    <span class="fas fa-chevron-up arrow-down-open" role='button'></span>
                </div>
                   
                <div class="hidden-sort" role="listbox"> 
                        <div>        
                    <li class="sort sort-date" tabindex = "2">Date</li> 
                    </div>
                    <div>     
                    <li class="sort sort-titre" tabindex = "3">Titre</li>
                    </div>
                        
                </div>
   ////////////////////////////////////////////             </ul>
            </div>
        </div>
        */