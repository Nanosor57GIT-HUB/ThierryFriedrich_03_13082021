

const urlLight = "API/FishEyeData.json";
   fetch(urlLight).then((response) =>
     response.json().then(function (data) {
       let photographers = data.photographers;
       let medias = data.media;
       createMediaBox(photographers,medias);
       
     })
   );

function createMediaBox(photographers, medias) { 
  
   const photographerMedias = medias.filter(
        (medias) => medias.photographerId == extractId
      );
      const MediaCards = photographerMedias
        .map((medias) => {
          let photographersInfos = photographers.filter(
            (photographers) => photographers.id == extractId
          );
  
return medias.video == undefined
      ? `<div class="lightbox" id="lightbox">
        <div class="btn-sideLeft">
          <button class="lightboxPrevious"></button>
        </div>

        <div class="mediabox">
          <img
            class="picturebox"
            src="../assets/Photos/${photographersInfos[0].name}/${medias.image}"
            alt="${medias.title}"
          />
         
          <p class="title">${medias.title}</p>
        </div>
        <div class="btn-sideRight">
          <button class="lightboxClose"></button>
          <button class="lightboxNext" aria-label="image suivante"></button>
        </div>
      </div>`
      :
       `<div class="lightbox" id="lightbox">
        <div class="btn-sideLeft">
          <button class="lightboxPrevious"></button>
        </div>

        <div class="mediabox">
        
          <video controls="controls" role="button" class="videobox">
      <source src="./assets/videos/${medias.video}" type=video/mp4>
    </video>   
          <p class="title">${medias.title}</p>
        </div>
        <div class="btn-sideRight">
          <button class="lightboxClose"></button>
          <button class="lightboxNext" aria-label="image suivante"></button>
        </div>
      </div>`;
});
const Modalbox = document.getElementById("containerLightB");
Modalbox.innerHTML = MediaCards;

 const OpenModalBox = document.querySelector(".cardsMediaslink");
 OpenModalBox.onclick = () => {
   Modalbox.style.display = "block"; 
 console.log(OpenModalBox);
 };
       const CloseModalbox = document.querySelector(".lightboxClose");
       CloseModalbox.onclick = () => {
         Modalbox.style.display = "none";
       };
       
     };


   

      




//close modal lightBox by cross

 


//displayBox();
/*const MediaCards = photographersMedias
  .map((DataMedia) => {
    let photographersInfos = Data.photographers.filter(
      (photographers) => photographers.id == photographerId
    );
    //console.log(photographersInfos);
    return DataMedia.video == undefined
      ? `
        `

      : `  
      `;
  })
  .join("");*/