
const urlForm = "API/FishEyeData.json";
   fetch(urlForm).then((response) =>
     response.json().then(function (data) {
       let photographers = data.photographers;
       
         createPhotographsContact(photographers);
       
     })
   );

       function createPhotographsContact(photographersID) {
  const photographers = photographersID.filter(
    (photographers) => photographers.id == extractId
  );
  photographers.map((photographer) => {

     const ModalForm = document.querySelector(".modal");
     ModalForm.innerHTML = `
<div class="windowContact">
          <div class="modalContact">
            <div class="closedContact">
              <span class="formClose">&times</span>
            </div>
            <div class="photographersContactName">
              <p>Contactez-moi</p>
              <h3>${photographer.name}</h3>
            </div>
            <form
              
              method="POST"
              name="Me contacter"
              class="formClass"
              id="formId"
            >
              <div class="name divInputs">
                <label for="prenom" class="prenom champ">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  placeholder="Votre Prénom"
                  id="prenom"
                  minlength="2"
                  maxlength="30"
                  aria-label="FirstName"
                />
              </div>
              <div class="lastName divInputs">
                <label for="nom" class="nom champ">Nom</label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre Nom"
                  id="nom"
                  minlength="2"
                  maxlength="30"
                  aria-label="Name"
                />
              </div>
              <div class="email divInputs">
                <label for="email" class="email champ">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Exemple@contact.fr"
                  id="email"
                  minlength="10"
                  maxlength="60"
                  aria-label="Email"
                />
              </div>
              <div class="message divInputs">
                <label for="msg">Message :</label>
                <textarea
                  id="msg"
                  name="msg"
                  placeholder="Ecrire votre message ..."
                  cols="50"
                  rows="8"
                  minlength="15"
                  maxlength="400"
                  aria-label="YourMessage"
                ></textarea>
              </div>
              <div class="submitForm-btn">
                <input type="submit" aria-label="Send" class="btn-Envoyer" id
                submit-btn value="Envoyer"/>
              </div>
            </form>
          </div>
        </div>`;
   
 });
}
