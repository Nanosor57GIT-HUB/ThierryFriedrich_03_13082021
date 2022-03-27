
const sliderContainer = document.querySelector(".slider-modal");
sliderContainer.innerHTML = `
 <div class="slider-container">
   <div class="arrow-left-container">
     <div class="arrow-left"></div>
   </div>

   <div class="slider-media-container"></div>
   
   <div class="arrow-right-container">
     <div class="arrow-right"></div>
   </div>
   <div class="close-lightbox">x</div>
 </div>`;


const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
const closeBtn = document.querySelector(".close-lightbox");

const enableLightboxListeners = (portfolio) => {
  // Create an copy array of all media cards
  //je creer une copie tableau de tous les medias
  const mediaCardsList = Array.from(
    document.querySelectorAll(".media-card-img")
  );

  // Create an copy array of all slides elements
  //Je creer un tableaux de  tous les éléments pour le media slide
  const slides = Array.from(document.querySelectorAll(".slide"));

  // Create an array holding ids of all media for navigation purposes
  //Je map les id de chaque media
  const slidesIds = slides.map((slide) => parseInt(slide.dataset.id));

  // Add click event listener to each media card
  // Mettre une fonction forEach avec un eventlistener aux media
  mediaCardsList.forEach((mc) =>
    mc.addEventListener("click", (e) => {
      // display Lightbox
      sliderContainer.style.display = "block";

      // Get current index of clicked media
      //Récupérer l'index du media cliquer
      const currIndex = slidesIds.indexOf(
        parseInt(e.target.parentElement.dataset.id)
      );
      //console.log(currIndex); //ressort l'index du media clicked

      // Display selected media inside lightbox
      // Afficher le média sélectionné dans la lightbox
      showSlide(currIndex);

      // Add event listener to Display previous media
      //Ajouter un écouteur d'événement pour afficher le média précédent
      prevBtn.addEventListener("click", (e) => {
        showSlide(parseInt(e.target.dataset.prev));
         console.log(e.target.dataset.prev);
      });
      
      console.log(currIndex); // positionne le previous sur l'index clicked(desc order 10...1-0)

      // Add event listener to Display next media
      //Ajouter un écouteur d'événement pour afficher le média suivant

      
      nextBtn.addEventListener("click", (e) => {
        showSlide(parseInt(e.target.dataset.next));
        console.log(e.target.dataset.next)

      });
     // console.log(nextBtn); //positionne le next sur l'index clicked(asc order 1...9-0)

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(e, index) {
  if (e.keyCode == "37") {
    prevBtn.click();
    console.log(window);
  } else if (e.keyCode == "39") {
    nextBtn.click();
    console.log(window);
  }
}





    })
  );

  /******************************************************************************************************************** */
  /*window.addEventListener("keydown", checkKeyPress, false);
  function checkKeyPress(e) {
    if (e.keyCode == "39") {
   
       console.log(showSlide);
    } else if (e.keyCode == "37") {
    showSlide(parseInt(e.target.dataset.prev));
       console.log(showSlide);
    }
  }*/

  /*document.addEventListener("onkeydown",  (e) => {
    if (e.keyCode === 37) {
      prev();
    } else if (e.keyCode === 39) {
      next();
    }
  });*/
  
  
 /* document.addEventListener("click", (e) => {
  if(e.keyCode === 37) {
 showSlide(-1);
  }else if(e.key === 39) {
     showSlide(1);
  }
})*/
  // todo eventlistener sur le clavier /******************************************************************************** */

  const showSlide = (index) => {
    // Display relevant media based on index
    //Afficher les médias pertinents en fonction de l'index
    slides.forEach((slide) => {
      parseInt(slide.dataset.id) === slidesIds[index]
        ? (slide.style.display = "block")
        : (slide.style.display = "none");
    });

    // Set next dataset value for Btn "previous"
    //Définir la valeur de l'ensemble de données suivant pour Btn "précédent"
    index - 1 < 0
      ? // If we reach first media index, go to last media index
        //Si nous atteignons le premier index de média, aller au dernier index de média
        (prevBtn.dataset.prev = slidesIds.length - 1)
      : // Otherwise, simply go to previous index
        // Sinon, aller simplement à l'index précédent
        (prevBtn.dataset.prev = index - 1);
    
    // Set next dataset value for Btn "next"
    //Définir la valeur de l'ensemble de données suivant pour Btn "next"
    index + 1 > slidesIds.length - 1
      ? // If we reach last media index, go back to first media index
        //Si nous atteignons le dernier index des médias, revenons au premier index des médias
        (nextBtn.dataset.next = 0)
      : // Otherwise, simply go to next index
        //Sinon, passez simplement à l'index suivant
        (nextBtn.dataset.next = index + 1);
  };
};

closeBtn.addEventListener("click", () => {
  sliderContainer.style.display = "none";
});




/*window.addEventListener ( "keydown" , checkKeyPress ,  false ) ; 
// Les paramètres de l'écouteur d'événement sont événement, fonction à exécuter, useCapture (optionnel). 
// Cet écouteur d'événement exécute la fonction checkKeyPress lorsqu'une touche est enfoncée 
// Vous pouvez utiliser keydown ou keyup pour vérifier quelle touche a été enfoncée ou relâchée
 
 
// cette fonction vérifie si la touche 'a' a été enfoncée 
function checkKeyPress ( key, nextBtn )  { 
 if  ( key. keyCode  ==  "39" )  { 
// alert ( "La touche 'a' a été enfoncée." ) ;
 next() 
 // 65 est le code clé renvoyé lorsque la touche 'a' est enfoncée 
 // si vous utilisez l'événement keypress au lieu de keydown/up, vous devez utiliser le code ASCII au lieu du keycode 
 } 
}*/
 