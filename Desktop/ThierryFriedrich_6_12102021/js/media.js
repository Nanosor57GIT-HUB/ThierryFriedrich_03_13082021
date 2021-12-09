/*export*/ const getData3 = () => {
  fetch("./FishEyeData.json").then((response) =>
    response.json().then((data) => {
      const Data = data;
      createMedia(Data);
    })
  );
};

getData3();

function createMedia(Data) {
  //console.log(Data);
  const photographerMedias = Data.media.filter(
    (DataMedia) => DataMedia.photographerId == extractId
  );
  //console.log(photographersMedias);

  const MediaCards = photographerMedias
    .map((DataMedia) => {
      let photographersInfos = Data.photographers.filter(
        (photographers) => photographers.id == extractId
      );
      //console.log(photographersInfos);
      return DataMedia.video == undefined
        ? `
        <div class="containerCardsMedias">
        <div class="ContentMediasCards">
        <a id="${DataMedia.id}" class="cardsMediaslink" href="" aria-label="${DataMedia.title}">
        <img class="pictureMedia" src="./assets/Photos/${photographersInfos[0].name}/${DataMedia.image}" 
        width="350" height="300" alt="${DataMedia.title}">
        </a>
        
        <div class="likeAndPay">
        <p class="card__title">${DataMedia.title}</p>
        <div class="likeMediaCards">
        <p class="cardPrice">${DataMedia.price} &euro;</p>
        <p class="numberLikes">${DataMedia.likes}
        <i class="fa-heart infosLikesIcon far" aria-label="likes" role="button" 
        tabindex="0"></i></p>
        </div>
        </div>
        </div>
        </div>
        `
        : `
        
        <div class="containerCardsMedias">
        <div class="ContentMediasCards">
        <a id="${DataMedia.id}" class="cardsMediaslink" href="" aria-label="${DataMedia.title}">
       
        <video controls="controls" role="button" class="videoMedia" width="350" height="300">
      <source src="./assets/videos/${DataMedia.video}" type=video/mp4>
    </video>
        </a>
        
        <div class="likeAndPay">
        <p class="card__title">${DataMedia.title}</p>
        <div class="likeMediaCards">
        <p class="cardPrice">${DataMedia.price} &euro;</p>
        <p class="numberLikes">${DataMedia.likes}
        <i class="fa-heart infosLikesIcon far" aria-label="likes" role="button" 
        tabindex="0"></i></p>
        </div>
        </div>
        </div>
        </div>
        
         <div class="boxLikes">
        <div class="mediaLikesBox">
        <p class="numberLikesBox">${DataMedia.likes}
        <i class="fas fa-heart heart-btn" aria-label="likes" role="button" data-value="88"></i></p>
        </div>
        
          <div class="likeInfosMedia">
        <p class="price">${DataMedia.price} €/Jour</p>
        </div>
        </div>
        
        `;
    })
    .join("");
  //console.log(MediaCards);
  const photographes = document.querySelector(".MediasContainer");
  photographes.innerHTML = MediaCards;
}
