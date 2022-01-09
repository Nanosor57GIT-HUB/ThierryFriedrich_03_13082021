//const url
fetch("API/FishEyeData.json")
  .then((response) => {
    const photographesDatas = response.json();
    photographesDatas.then((data) => {
      const medias = data.media;
      const photographes = data.photographers;
      // console.log(photographes);

      const photographesProfil = photographes;
      photographes.map((photographeId) => {
        /*fait une boucle sur tous les photographes*/ //console.log(photographes);
        const photographersInfos = photographes.filter(
          (photographers) => photographers.id == extractId
        );
        /*récupère le photographe de la page actuelle*/ //console.log(photographersInfos[0].name)
      });

      const photographesMedias = medias;
      /*tous les medias*/ //console.log(photographesMedias);
      const photographerMediaInfo = photographesMedias.filter(
        (photographer) => {
          return photographer.photographerId == extractId;
        }
      );
      //console.log(photographerMediaInfo);
      /*l'id media actuel*/ //console.log(photographerMediaInfo);

      let totalLikesById = medias
        .filter((medias) => medias.photographerId == extractId)
        .reduce((acc, media) => acc + media.likes, 0);

      let mediaHtml = "";
      photographerMediaInfo.forEach((medias, photographes) => {
        mediaHtml += `
        
             <div class="gallery-media">

                 ${mediasFactory(medias)}

                 ${medias.title}

                 <div class="likeMediaCards">
        <img class="infosLikesIcon2" src="./assets/icones/heart-solid.svg" aria-label="Clicker si vous aimez" role="button" tabindex="0"/>
        <img class="infosLikesIcon1" src="./assets/icones/heart-solid.svg" aria-label="Clicker si vous aimez" role="button" tabindex="0"/> 
        <input class="numberLikes" value="${
          medias.likes
        }" aria-labelledby="Ce media a déja ${medias.likes} likes"/>
           </div>

             </div>

              <div class="boxLikes">
        <div class="mediaLikesBox">
        <p class="numberLikesBox">${totalLikesById}
        <i class="fas fa-heart heart-btn" aria-label="likes" role="button" data-value="120"></i></p>
            </div>

              <div class="likeInfosMedia">
        <p class="price" aria-labelledby="Son taux journalier est de: ${
          photographes.price
        } Euros par jour ">${photographes.price} €/Jour</p>
            </div>
          
       </div>
        `;
      });

      document.querySelector(".containerCardsMedias").innerHTML = mediaHtml;

      function mediasFactory(medias, photographes) {
        const name = photographes;

        const { image, title, video } = medias;

        if (image !== undefined) {
          return createImage(image, title);
        }

        return createVideo(video, title);

        function createImage(src, title, name) {
          return `<img src= assets/Photos/${name}/${src} alt=${title} class="media" />`;
        }

        function createVideo(src, title) {
          return `
            
             <video class="media">
             
                 <source src= assets/videos/${src} alt=${title}> </source>
             
             </video>
          
         `;
        }
      }

      //Medias likes

      const incrementButton = document.querySelectorAll(".infosLikesIcon1");
      const decrementButton = document.querySelectorAll(".infosLikesIcon2");
      const input = document.querySelectorAll(".numberLikes");
      for (let i = 0; i < incrementButton.length; i++) {
        incrementButton[i].addEventListener("click", function (event) {
          // console.log("ok");
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
          if ((inputLike.value = newValue)) {
            incrementButton[i].style.display = "block";
          } else {
            input.value = 0;
          }
        });
      }
    });
  })

  .catch((err) => console.log(err));
/*Aimeriez-vous avoir un total? Voici un exemple d’usage où on double toutes les valeurs d’un tableau avant d’en faire le cumul. :

var numbers = [1, 2, 3, 4];
 var total_number = numbers.map(function(number){
 return number * 2;
 }).reduce(function(total, number){
 return total + number;
 }, 0);
 console.log("Le total est", total_number); // 20*/
