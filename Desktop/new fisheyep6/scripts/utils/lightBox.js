//const url
fetch("data/FishEyeData.json").then((response) => {
  const photographesDatas = response.json();
  photographesDatas.then((data) => {
    const medias = data.media;
    const photographes = data.photographers;
    // console.log(photographes);

    const ArrayMediasByPhotographer = medias.filter(
      (medias) => medias.photographerId == extractId
    );
    //console.log(ArrayMediasByPhotographer);

    const PrintLightBox = ArrayMediasByPhotographer.map((medias) => {
      let photographersInfos = photographes.filter(
        (photographers) => photographers.id == extractId
      );

      return medias.video == null
        ? `<div class="lightbox">

        <div class="btn-sideLeft">
          <button class="lightboxPrevious" aria-label="Media précedant" tabindex="0"></button>
        </div>

        <div class="mediabox">
          <img
            class="picturebox" class="pictureMedia"
            src="../assets/Photos/${name}/${image}"
            alt="${title}"
          />
          <p class="title" aria="hidden">${title}</p>
        </div>

        <div class="btn-sideRight">
          <button class="lightboxClose" aria-label="Fermer la lightbox" tabindex="0"></button>
          <button class="lightboxNext" aria-label="Media suivant" tabindex="0"></button>
        </div>

      </div>`
        : `<div class="lightbox">

        <div class="btn-sideLeft">
          <button class="lightboxPrevious" arial-label="Media précedant" tabindex="0"></button>
        </div>

        <div class="mediabox">
          <video controls="controls" role="button" class="videobox" class="videoMedia">
      <source src="./assets/videos/${video}"  type=video/mp4 alt="${title}" tabindex="0">
    </video> 
     <p class="title" aria="hidden">${medias.title}</p>
        </div>

        <div class="btn-sideRight">
        <button class="lightboxNext" aria-label="Media suivant" tabindex="0"></button>
          <button class="lightboxClose" aria-label="Fermer la lightbox" tabindex="0"></button>
          
        </div>

      </div>`;
    }).join();
    const DisplayBox = (document.getElementById("lightboxContainer").innerHTML =
      PrintLightBox);
    //console.log(PrintBoxLight);

    //gestion modal lightbox
    const modalboxLight = document.querySelector(".lightboxContainer");
    //console.log(modalboxLight);
    const mediabox = document.querySelector("mediabox");
    const ModalBoxDisplays = document.querySelectorAll(".cardsMediaslink");
    //console.log(ModalBoxDisplays);
    for (let ModalBoxDisplay of ModalBoxDisplays) {
      ModalBoxDisplay.addEventListener("click", () => {
        //  console.log(ModalBoxDisplay);
        modalboxLight.style.display = "block";
        // console.log(modalboxLight);
      });
    }

    const CloseModalbox = document.querySelector(".lightboxClose");
    // console.log(CloseModalbox);
    CloseModalbox.addEventListener("click", () => {
      modalboxLight.style.display = "none";
    });
  });
});

/*
 listenOpenLightbox() {
        document.querySelectorAll("article img, article video").forEach(media => {
            media.addEventListener('click', () => {this.render()})
        })
        */

//listenOpenLightbox()
