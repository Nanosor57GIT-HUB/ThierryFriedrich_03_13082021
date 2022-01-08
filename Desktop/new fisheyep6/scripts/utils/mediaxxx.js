fetch("API/FishEyeData.json")
  .then((response) => {
    const photographesDatas = response.json();
    photographesDatas.then((data) => {
      const medias = data.media;
      const photographes = data.photographers;
      // console.log(photographes);

      const photographerMedias = medias.filter(
        (medias) => medias.photographerId == extractId
      );
      // console.log(photographerMedias);

      /*  let sortByDates = photographerMedias.map((medias) => medias.date);
  sortByDates.sort();
  // console.log(sortByDates);

  let sortByTitle = photographerMedias.map((medias) => medias.title);
  sortByTitle.sort();
  //console.log(sortByTitle);*/

      let totalLikesById = medias
        .filter((medias) => medias.photographerId == extractId)
        .reduce((acc, media) => acc + media.likes, 0);

      const printMediaCards = photographerMedias
        .map((medias) => {
          let photographersInfos = photographes.filter(
            (photographers) => photographers.id == extractId
          );
        <div class="like">
        
        <div class="likeMediaCards">
        <img class="infosLikesIcon2" src="./assets/icones/heart-solid.svg" aria-label="Clicker si vous aimez" role="button" tabindex="0"/>
        <img class="infosLikesIcon1" src="./assets/icones/heart-solid.svg" aria-label="Clicker si vous aimez" role="button" tabindex="0"/> 
        <input class="numberLikes" value="${medias.likes}" aria-labelledby="Ce media a déja ${medias.likes} likes"/>
        </div>

         <div class="boxLikes">
        <div class="mediaLikesBox">
        <p class="numberLikesBox">${totalLikesById}
        <i class="fas fa-heart heart-btn" aria-label="likes" role="button" data-value="120"></i></p>
        </div>
        
          <div class="likeInfosMedia">
        <p class="price" aria-labelledby="Son taux journalier est de: ${photographersInfos[0].price} Euros par jour ">${photographersInfos[0].price} €/Jour</p>
        </div>
        </div>      
        `;
        })
        .join("");
      const photoCards = (document.querySelector(
        ".containerCardsMedias"
      ).innerHTML = printMediaCards);
      // console.log(photoCards);
      likesPlus();

      

      function listenNewLikes() {
        document.querySelectorAll(".numberLikes img").forEach((likeBtn) => {
            likeBtn.addEventListener("click", () => {
              totalLikes++;
            });
          });
    }
console.log(listenNewLikes()); 



    })
  })


//Medias likes
function likesPlus() {
  const incrementButton = document.querySelectorAll(".infosLikesIcon1");
  const decrementButton = document.querySelectorAll(".infosLikesIcon2");
  const input = document.querySelectorAll(".numberLikes");
  for (let i = 0; i < incrementButton.length; i++) {
    incrementButton[i].addEventListener("click", function (event) {
     //  console.log("ok");
      // decrementButton[i];
      let buttonClicked = event.target;
      let inputLike = buttonClicked.parentElement.children[2];
      // console.log(inputLike);
      let inputLikeValue = inputLike.value;
      //console.log(inputLikeValue);
      let newValue = parseInt(inputLikeValue) + 1;
      //console.log(newValue);
      if ((inputLike.value = newValue)) {
        incrementButton[i].style.display = "none";
      }
    });
  }

  //Decrement
  for (let i = 0; i < decrementButton.length; i++) {
   decrementButton[i].addEventListener("click", function (event) {
   
     let buttonClicked = event.target;
     //console.log(buttonClicked);
     let inputLike = buttonClicked.parentElement.children[2];
    // console.log(input);
     let inputLikeValue = inputLike.value;
     //console.log(inputValue);
     let newValue = parseInt(inputLikeValue) - 1;
     //console.log(newValue);
     if (inputLike.value = newValue) {
       incrementButton[i].style.display = "block";
     } else {
       input.value = 0;
     }
   });
 }
}
