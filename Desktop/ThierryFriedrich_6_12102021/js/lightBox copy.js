

/*containerLightB();
function containerLightB() {
  const lightbox = getLightBox();
  displayBox(lightbox);
}*/

/*export*/ const getData4 = () => {
  fetch("./FishEyeData.json").then((response) =>
    response.json().then((data) => {
      const datamedia = data.media;
      displayBox(datamedia)
    })
  );
};

getData4();
console.log(getData4());

 /* try {
    const response = await fetch("../FishEyeData.json");
    const data = await response.json();
    const datamedia = data.media;
    return datamedia;
    console.log(datamedia);
  } catch (error) {
    alert(error);
  }*/

//getLightBox()


function displayBox(datamedia) {

    document.getElementById(
      "containerLightB"
    ).innerHTML = `<div class="lightbox">
        <div class="btn-sideLeft">
          <button class="lightboxPrevious"></button>
        </div>

        <div class="mediabox">
          <img
            class="picturebox"
            src="../assets/Photos/Mimi Keel/Travel_Lonesome.jpg"
            alt="${datamedia.title}"
          />
          
          <p class="title">${datamedia.title}</p>
        </div>
        <div class="btn-sideRight">
          <button class="lightboxClose"></button>
          <button class="lightboxNext" aria-label="image suivante"></button>
        </div>
      </div>`;
}
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