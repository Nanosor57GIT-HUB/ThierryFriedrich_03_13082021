
// class pictureMedia et videoMedia pour click
//data.media.image / data.media.video

const getDataMedias = () => {
  fetch("API/FishEyeData.json").then((response) =>
    response.json().then((data) => {
      const Data = data;
      createMediaBox(Data);
    })
  );
};

getDataMedias()

function createMediaBox(Data) {
  const Medias = Data.media.filter(
    (DataMedia) => DataMedia.title);

    const Modalbox = document.getElementById(
      "containerLightB")
    
    Modalbox.innerHTML = `<div class="lightbox">
        <div class="btn-sideLeft">
          <button class="lightboxPrevious"></button>
        </div>

        <div class="mediabox">
          <img
            class="picturebox"
            src="../assets/Photos/Mimi Keel/Travel_Lonesome.jpg"
            alt="${Medias.title}"
          />
          
          <p class="title">${Medias.title}</p>
        </div>
        <div class="btn-sideRight">
          <button class="lightboxClose"></button>
          <button class="lightboxNext" aria-label="image suivante"></button>
        </div>
      </div>`;

 /*const OpenModalbox = document.querySelectorAll(".displayMedia");
 OpenModalbox.onclick = () => {
   Modalbox.style.display = "block";
 }; */
  const CloseModalbox = document.querySelector(".lightboxClose");
CloseModalbox.onclick = () => {
  Modalbox.style.display = "none";
}
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