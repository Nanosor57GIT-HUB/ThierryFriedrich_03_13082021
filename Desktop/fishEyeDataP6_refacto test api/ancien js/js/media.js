const urlMedias = "API/FishEyeData.json";
fetch("API/FishEyeData.json").then((response) =>
  response.json().then(function (data) {
    let photographers = data.photographers;
    let medias = data.media;
    createPhotographsMedias(photographers, medias);
  })
);

    function createPhotographsMedias(photographers, medias) {
      const photographerMedias = medias.filter(
        (medias) => medias.photographerId == extractId
      );

      let totalLikesById = medias
        .filter((medias) => medias.photographerId == extractId)
        .reduce((acc, media) => acc + media.likes, 0);
//console.log(totalLikesById);


      const MediaCards = photographerMedias
        .map((medias) => {
          let photographersInfos = photographers.filter(
            (photographers) => photographers.id == extractId
          );

          return medias.video == undefined
            ? `
        <div class="containerCardsMedias">
        <div class="ContentMediasCards">
        <a id="${medias.id}" class="cardsMediaslink" href="" aria-label="${medias.title}">
        <img class="pictureMedia" class="displayMedia" src="./assets/Photos/${photographersInfos[0].name}/${medias.image}" 
        width="350" height="300" alt="${medias.title}">
        </a>
        
        <div class="likeAndPay">
        <p class="card__title">${medias.title}</p>
        <div class="likeMediaCards">
        <p class="cardPrice">${medias.price} &euro;</p>
        <p class="numberLikes">${medias.likes}
        <i class="fa-heart infosLikesIcon far" aria-label="likes" role="button" 
        tabindex="0"></i></p>
        </div>
        </div>
        </div>
        </div>
        `
            :
             `
        <div class="containerCardsMedias">
        <div class="ContentMediasCards">
        <a id="${medias.id}" class="cardsMediaslink" href="" aria-label="${medias.title}">
        <video controls="controls" role="button" class="videoMedia" class="displayMedia" width="350" height="300">
      <source src="./assets/videos/${medias.video}" type=video/mp4>
    </video>
        </a>
        
        <div class="likeAndPay">
        <p class="card__title">${medias.title}</p>
        <div class="likeMediaCards">
        <p class="cardPrice">${medias.price} &euro;</p>
        <p class="numberLikes">${medias.likes}
        <i class="fa-heart infosLikesIcon far" aria-label="likes" role="button" 
        tabindex="0"></i></p>
        </div>
        </div>
        </div>
        </div>
        
         <div class="boxLikes">
        <div class="mediaLikesBox">
        <p class="numberLikesBox">${totalLikesById}
        <i class="fas fa-heart heart-btn" aria-label="likes" role="button" data-value="120"></i></p>
        </div>
        
          <div class="likeInfosMedia">
        <p class="price">${photographersInfos[0].price} €/Jour</p>
        </div>
        </div>      
        `;
        })
        .join("");

      const photographes = document.querySelector(".MediasContainer");
      photographes.innerHTML = MediaCards;
      
      
    }
  
