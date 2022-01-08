//Medias likes


  
  const incrementButton = document.querySelectorAll(".infos-Likes-Icon"),
    decrementButton = document.querySelectorAll(".infos-Likes-Icon2"),
    span = document.querySelectorAll(".media-card-likes");
  //Increment
  for (let i = 0; i < incrementButton.length; i++) {
    incrementButton[i].addEventListener("click", function (event) {
      console.log("ok");
      let buttonClicked = event.target;
      let spanLike = buttonClicked.parentElement.children[2];
      // console.log(spanLike);
      let spanLikeValue = spanLike.value;
      //console.log(spanLikeValue);
      let newValue = parseInt(spanLikeValue) + 1;
      //console.log(newValue);
      if ((spanLike.value = newValue)) {
       incrementButton[i].style.display = "none";
      }
    });
  }

  //Decrement
  for (let i = 0; i < decrementButton.length; i++) {
    decrementButton[i].addEventListener("click", function (event) {
      let buttonClicked = event.target;
      //console.log(buttonClicked);
      let spanLike = buttonClicked.parentElement.children[2];
      // console.log(span);
      let spanLikeValue = spanLike.value;
      //console.log(spanValue);
      let newValue = parseInt(spanLikeValue) - 1;
      //console.log(newValue);
      if ((spanLike.value = newValue)) {
        incrementButton[i].style.display = "block";
      } else {
        span.value = 0;
      }
    });
  }



