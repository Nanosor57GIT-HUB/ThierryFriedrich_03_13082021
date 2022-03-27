const selectSort = document.querySelector(".selectBox");

selectSort.innerHTML = `<div class="works-sort">
<div>
    <p class="sort-title">Trier par</p>
    </div>
    <div id="sort-wrapper">
      
        <div class="sort-base">
                <button class="sort-btn" id="sort-btn" id="select-first-option" tabindex = "1">
                <span id="select-first-option-text">Popularité</span>
                </button>
                    <span class="fas fa-chevron-up arrow-down-open" role='button'></span>
                </div>
                   
                <div class="hidden-sort" id="select-block-options" role="listbox"> 
                               
                    <button class="sort sort-date select-option" tabindex = "2">Date</button> 
                    
                         
                    <button class="sort sort-titre select-option" tabindex = "3">Titre</button>
                    
                        
                </div>
                
            </div>
        </div>`;

const selectOptions = document.querySelector("#select-block-options");

const firstButtonText = document.querySelector("#select-first-option-text");

const optionsButtons = selectOptions.querySelectorAll("button");

function handleButtonsOptions() {
  optionsButtons.forEach((button) => {
    button.onclick = () => {
      const buttonText = button.textContent;
      button.innerHTML = firstButtonText.textContent;
      firstButtonText.innerHTML = buttonText;
    };
  });
}

function sortData(data, photographer, totalLikes, dayPrice) {
  const popButton = document.querySelector(".sort-btn");
  const arrow = document.querySelector(".fa-chevron-up");
  // const datButton = document.querySelector(".sort-date");
  // const titButton = document.querySelector(".sort-titre");
  // const buttons = document.querySelector(".hidden-sort");
  // const pop = document.querySelector(".sort-base");

  popButton.addEventListener("click", () => {
    selectOptions.classList.toggle("hidden");
    arrow.classList.toggle("arrow-down-open");
    popButton.classList.toggle("radius");
  });

  selectOptions.addEventListener("click", function (e) {
    console.log();
    selectOptions.classList.toggle("hidden");
    arrow.classList.toggle("arrow-down-open");
    popButton.classList.remove("radius");

    function tri(data) {
      if (e.target.innerHTML === "Popularité") {
        const triPopularite = data.sort((a, b) => {
          return a.likes > b.likes ? 1 : -1;
        });
        handleButtonsOptions();
        displayMedia(triPopularite, photographer);
      }

      if (e.target.innerHTML === "Date") {
        const triDate = data.sort((a, b) => {
          return a.date > b.date ? 1 : -1;
        });
        handleButtonsOptions();
        displayMedia(triDate, photographer);
      }

      if (e.target.innerHTML === "Titre") {
        const triTitre = data.sort((a, b) => {
          return a.title > b.title ? 1 : -1;
        });
        handleButtonsOptions();
        displayMedia(triTitre, photographer);
      }

      likesInfos(totalLikes, dayPrice);
      enableLightboxListeners();
    }

    tri(data);
  });
}
