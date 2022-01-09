//Medias likes


  
    function likeCard() {
      const incrementButton = document.querySelectorAll(".infos-Likes-Icon1");
      const decrementButton = document.querySelectorAll(".infos-Likes-Icon2");
      const input = document.querySelectorAll(".media-card-likes");
      for (let i = 0; i < incrementButton.length; i++) {
        incrementButton[i].addEventListener("click", function (event) {
          console.log("ok");
          // decrementButton[i];
          let buttonClicked = event.target;
          let inputLike = buttonClicked.parentElement.children[2];
          console.log(inputLike);
          let inputLikeValue = inputLike.value;
          console.log(inputLikeValue);
          let newValue = parseInt(inputLikeValue) + 1;
          console.log(newValue);
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
    }
    likeCard()
