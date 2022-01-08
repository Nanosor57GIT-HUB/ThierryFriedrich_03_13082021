// 1 medias
const incrementButton = document.querySelector(".infos-Likes-Icon")
incrementButton.addEventListener("click", function (event) {console.log("ok")});
 // decrementButton = document.querySelectorAll(".infos-Likes-Icon2"),
  span = document.querySelectorAll(".media-card-likes");
//Increment
console.log(incrementButton.value);


class VideoMediaSubFactory {
  static render(video, w, h, title, likes) {
    return `<video width=${w} height=${h} preload="metadata" class="media-card-img">
                <source src="assets/videos/${video}" type="video/mp4">
              </video>
               <div class="media-card-text">
         `;
  }
}

//souci récup chemin image (name)
class ImageMediaSubFactory {
  static render( image, title, type, name, likes) {
 //    console.log(name);
    return `<img class="media-${type}-img" src="assets/Photos/${name}/${image}" alt="${title}">
     <div class="media-card-text">
          <span class="media-card-title">${title}</span>
          
          <div class="likesByMedia">    
          <img src="./assets/icones/heart-regular.svg" class="infos-Likes-Icon2"/>
           <img src="./assets/icones/heart-regular.svg" class="infos-Likes-Icon1"/>
           <span class="media-card-likes" value="${likes}">${likes}</span>  
          </div>
        </div>`;
  }
}

function mediaFactory(data, photographer) {
  const { id, date, image, likes, title, video } = data;
const {name} = photographer;
//console.log(name);

  //mediaCard
  function getMediaCardDOM() {
    const article = document.createElement("article");
    article.innerHTML = `
      <div class="media-card" data-id="${id}" data-title="${title}" data-date="${date}">
      ${
        image
          ? ImageMediaSubFactory.render(image, title, "card", name, likes)
          : VideoMediaSubFactory.render(video, "350", "300", name, title, likes)
      }
        
       

      </div>
`;
    return article;
  }

  //lightbox
/*  function getMediaSlidesDOM() {
    const article = document.createElement("article");
    article.innerHTML = `
      <div class="slide hide-slide" data-id="${id}" data-title="${title}" data-date="${date}">
        <div class="slide-media-container">
      ${
        image
          ? ImageMediaSubFactory.render(image, title, "slide")
          : VideoMediaSubFactory.render(video, "100%", "80%")
      }        
        </div>
        <p>${title}</p>
      </div>
`;
    return article;
  }
*/
  return { getMediaCardDOM }
  
}
