function likesInfos(totalLikes, photographer, price) {
  const likesbox = document.querySelector(".likesBox");
  likesbox.innerHTML = `
     <div class="boxLikes">
        <div class="mediaLikesBox">
        <p class="numberLikesBox">${totalLikes}
        <i class="fas fa-heart heart-btn" aria-label="likes" role="button" data-value="120"></i></p>
        </div>
         <div class="likeInfosMedia">
        <p class="price" aria-labelledby="Son taux journalier est de: ${price} Euros par jour ">${price} €/Jour</p>
        </div>
        </div>
`;
  return likesbox;
}
likesInfos();
console.log(likesInfos());
