
 /*let promise = async () => {
   fetch("FishEyeData.json")
   //console.log(promise);
   .then((response) => response.json())
   .then((data) => console.log(data.media[2]))
 };
  
promise();*/


 /*function portfolio(media) {
let idCard = document.getElementById("${photographers.id}");
 }*/

 //Créer un élément avec  la propriété innerHTML
 const phototag = document.createElement("h3");
 phototag.innerHTML = "je suis présent";
 const emplacementh1 = document.querySelector("#inner");
 emplacementh1.appendChild(phototag);


 //Créer un élément avec la méthode createTextNode()
 const paragraphe01 = document.createElement("p");
 const paragraphe01Text = document.createTextNode("Je galère avec javascript");
 paragraphe01.appendChild(paragraphe01Text);
 document.querySelector("#createnode").appendChild(paragraphe01)

//*********************************************************************************************** */
 //Créer une promesse(promise)

 //Déclaration d'une promesse
 const maPromesse = new Promise((resolve, reject) => {
   //Si l'on ne fait pas appelle au paramètres, elle se retrouvera "pending" (en attente)
//resolve("Promesse remplie");
//reject("Promesse en echec");
setTimeout(() => {
  resolve("Promesse remplie");
}, 2000);
 });
// console.log(maPromesse);

 //On fait appelle à la méthode ".then" avec une fonction de callback et un argument response.
 //.then response est associé à resolve ci-dessus
maPromesse.then((response) => {
//console.log(response);
});
//On fait appelle à la méthode ".catch" avec une fonction de callback et un argument erreur.
 //.then response est associé à reject ci-dessus
maPromesse.catch((erreur) => {
 // console.log(erreur);
});

//Rajout de SetTimeOut
//console.log("Je m'affiche en premier alors que je suis en dernier");

//************************************************************************************************ */
// Fonction simple et de Callback

//Fonction normale
function simpleFonction() {
 // console.log("Je suis une simple fonction");
}
//Toujours appeler la fonction pour qu'elle s'affiche
simpleFonction()


//Création de la fonction avec comme paramètre "nom" 
/*const salutation = (nom) => {
  console.log("Je suis la fonction secondaire lorsqu'il y a un appelle de callback");
  alert("bonjour " + nom)
}*/
//Appelle de la fonction avec le paramètre "nom" qui devient "Thierry" (pour une fonction simple)
//salutation("Thierry")

//Cette appelle de fonction est englobée dans l'appelle de du callback 
//alors qu'elle n'a pas le paramètre "nom"
/*const salutation2 = () => {
  console.log( "Je suis la la troisième fonction lorsqu'il y a un appelle de callback");   
}*/

//Fonction de callback
//function donnéeVisiteur(callbackXYZ) {
 // let nomPrompt = prompt("Entrer votre nom")
  //On passe le paramètre "callback" en fonction avec la variable "nomPrompt"
  /*console.log("Je suis la fonction principale");
  callbackXYZ(nomPrompt)
  
}*/
//On appelle la fonction "donnéeVisiteur" dans laquelle on met en paramètre la fonction "salutation"
//Devient alors une fonction de callback
//donnéeVisiteur(salutation)
//La fonction principal "donnéeVisiteur" appelle la fonction "salutation"  
//qui appelle ensuite la fonction "salutation2"
//donnéeVisiteur(salutation2);

//************************************************************************************* */

//Fonction de callback avec plusieurs paramètres
// voir https://www.youtube.com/watch?v=qU0QldaVQdE&list=PLF88SKt6r7NbipYFd8-xPRAgelSNMTQgm&index=31
/*const salutation = (nom) => {
  console.log(
    "Je suis la fonction secondaire lorsqu'il y a un appelle de callback"
  );
  alert("bonjour " + nom);
};

const salutation2 = () => {
  console.log(
    "Je suis la la troisième fonction lorsqu'il y a un appelle de callback"
  );
};

//Fonction de callback
function donnéeVisiteur(callbackXYZ) {
 // let nomPrompt = prompt("Entrer votre nom");
  //On passe le paramètre "callback" en fonction avec la variable "nomPrompt"
  console.log("Je suis la fonction principale");
  callbackXYZ(nomPrompt);
}

donnéeVisiteur(salutation);
donnéeVisiteur(salutation2);*/

//*********************************************************************************************** */
//Fetch , récupérer des données

//création de la variable promesse
//const promise01 = fetch("https://jsonplaceholder.typicode.com/users")
//response retourne la réponse
 // .then((response) => response.json())
  //Que l'on retourne sur le log
  //Pour récupérer les données unitaires, on rajoute l'emplacement dans le tableau (exple: 2)
  //Et si je veux une clé précise dans un tableau , je regarde dans le tableau (exple: address.city)
  //Pour un tableau dans un tableau (exple: address.geo["lat"])
 // .then((usersData) => console.log(usersData[2].address.city))
  //Si la promesse n'est pas remplie, le catch retourne une erreur
//.catch((error) => console.log("Une erreur est survenue!!!"));

/********************************************************** */
//Afficher les données sur une page web

const AffichageUser = document.querySelector(".AffichageFetch"); 
const promise01 = fetch("https://jsonplaceholder.typicode.com/users")

  promise01.then((response) => {
    console.log(response); 

  const usersData = response.json() 

  console.log(usersData);

  usersData.then((user) => {
    console.log(user);

    const txtLat = user[2].address.geo["lat"];
    const txtLng = user[2].address.geo["lng"];
    const txtUserName = user[2].name;
    const txtCity = user[2].address.city;

  //  console.log(txtLat);
  //  console.log(txtLng);
   // console.log(txtUserName);
   // console.log(txtCity);

    //Methode 1
    AffichageUser.innerHTML = `<h3 style="color: blue">Affichage du fetch</h3><span class="name">
    <strong>Son nom est :</strong> ${user[2].name}</span>
   <span class="city"><strong>Elle habite dans la ville de :</strong> ${user[2].address.city}</span>
   <span class="geoLat"><strong>Avec comme Lattitude :</strong> ${user[2].address.geo["lat"]}</span>
   <span class="geoLng"><strong>Et comme Longitude :</strong> ${user[2].address.geo["lng"]}</span>`;

    //Methode 2
    //Créer les balises dans le html(+ span texte) puis lés appeler. Ensuite ajouter le innerHtml(ci-dessous)
    //AffichageUserName.innerHTML = txtUserName 
    //AffichageCity.innerHTML = txtCity
    //AffichageLat.innerHTML = txtLat
    //AffichageLng.innerHTML = txtLng
  }
 
  );
})
  .catch((error) => console.log("Une erreur est survenue!!!"));
//console.log(AffichageUser);

/********************************************************************************************** */
//Utilisation de async/await et try/catch (nouvelle methode)

/*const AffichageUser = document.querySelector(".AffichageFetch");
const promise01 = fetch("https://jsonplaceholder.typicode.com/users");

promise01
  .then(async (response) => {
    console.log(response);

    try {
    const user = await response.json();
    console.log(user[2]);

   

      const txtLat = user[2].address.geo["lat"];
      const txtLng = user[2].address.geo["lng"];
      const txtUserName = user[2].name;
      const txtCity = user[2].address.city;

      AffichageUser.innerHTML = `<h3 style="color: blue">Affichage du fetch</h3>
      <span class="name"><strong>Son nom est :</strong> ${user[2].name}</span>
   <span class="city"><strong>Elle habite dans la ville de :</strong> ${user[2].address.city}</span>
   <span class="geoLat"><strong>Avec comme Lattitude :</strong> ${user[2].address.geo["lat"]}</span>
   <span class="geoLng"><strong>Et comme Longitude :</strong> ${user[2].address.geo["lng"]}</span>`;
    } 
 catch(error) { console.log("Une erreur est survenue!!!");
  }
})*/
  
/************************************************************** */
//Utilisation de requete de type POST

//Création d'un nouvel objet
/*const newKey = {
accessibility: "altTxt"
};

const promise01 = fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify(newKey),
  headers: {
    "Content-Type": "application/json",
  },
});
 
promise01.then(async (response) => {
  try {
    console.log(response);
   const contenu = await response.json()
   console.log(contenu);
  }catch (e) {
    console.log(e);
  }
});*/

/******************************************************************************************************** */
//Création d'un objet

//Methode1
const monObjet = {
  Prénon : "Thierry",
  Age: 20,
  Ville: "Metz"
}
//Remplacer une valeur
monObjet.Age = 51 + " ans";
//ajouter une key et une value
monObjet["Ambition"] = "Devenir dev front-end";

//Methode2
const monObjet2 = new Object();
monObjet2.Marque = "Mercedes",
monObjet2.Modèle = "SLC",
monObjet2.Couleur = "BleuOcean",
monObjet2.Année = 2021;

//console.log(monObjet);
//console.log(monObjet2);

/*********************************************************** */
//L'objet natif Object et quelques méthodes
//console.log(Object);

const promise02 = fetch("https://jsonplaceholder.typicode.com/users");
promise02.then(async (response) => {
 // console.log(response);
  const data = await response.json();
  //console.log(data);
  //console.log(data[2]);
  //console.log(Object.keys(data));
  // console.log(Object.entries(data));
  //  console.log(Object.values(data));

    //Décrit les possibilités true/false sur la modification de data[2] sur la value "name"
    const descriptor = Object.getOwnPropertyDescriptor(data[2], "name");
   // console.log(descriptor);
});

/********************************************************************************************** */
//Création des classes et son instance

//Création d'une classe
/*class Livre {
  constructor(Titre, Auteur, NbreDePages) {
    this.Titre = Titre,
    this.Auteur = Auteur,
    this.NbreDePages = NbreDePages + " pages"
  }
};

//Appelle d'une instance de class pour créer un nouvel objet "livre"
let serieNoire = new Livre (
  "La tour sombre1 - Le pistoléro",
  "Stephen King",
  250
)
let serieNoire2 = new Livre(
  "La tour sombre2 - Les trois cartes",
  "Stephen King",
  267
);
let serieNoire3 = new Livre(
  "La tour sombre3 - Terres perdues",
  "Stephen King",
  528
);*/
//console.log(serieNoire);
//console.log(serieNoire3);
//console.log(serieNoire2);

/********************************************************** */
//Créer une classe et ajouter une méthode

class Livre2 {
  constructor(Titre, Auteur, NbreDePages) {
    (this.Titre = Titre),
      (this.Auteur = Auteur),
      (this.NbreDePages = NbreDePages);
  }
  //1ere méthode(function sans etre obligé de la nommer)
  //dans laquelle on peut ajouter un argument
  affichage1() {
    console.log(
      "J'ai lu " +
        this.Titre +
        " de " +
        this.Auteur +
        " et qui fait " +
        this.NbreDePages +
        " pages"
    );
  }
  //2eme méthode(function sans etre obligé de la nommer)
  //dans laquelle on peut ajouter un argument
  affichage2(nom) {
    console.log("J'ai lu " + this.Titre + "." + nom);
  }
}
  
 let monLivre = new Livre2 (
   "La tour sombre1 - Le pistoléro",
   "Stephen King",
   250
 );
 let monLivre2 = new Livre2 (
   "La tour sombre2", "Stephen King", 490
 );

 //console.log(monLivre);
 //console.log(monLivre2);

 monLivre.affichage1();
 //Affichage de la 2eme méthode dans laquelle on donne à l'argument une valeur
 monLivre2.affichage2(" Thierry");

/*************************************** */
//Les expressions de classes
//Une classe peut fonctionner comme une fonction

//Créer une variable dans une classe anonyme(expresions simples)
 const livre3 = class {
//------------------------
  constructor(Titre, Auteur, NbreDePages) {
    (this.Titre = Titre),
      (this.Auteur = Auteur),
      (this.NbreDePages = NbreDePages);
  }
}

  //Créer une variable avec une classe nommée(expressions nommées)
  const livre4 = class LivreY {
//-------------------------------
  constructor(Titre, Auteur, NbreDePages) {
    (this.Titre = Titre),
      (this.Auteur = Auteur),
      (this.NbreDePages = NbreDePages);
  }
}

/***************************************************** */
//Création des sous-classe ou "classe fille" avec extends et super()

class Livre {
  constructor(Titre, Auteur, NbreDePages) {
    (this.Titre = Titre),
      (this.Auteur = Auteur),
      (this.NbreDePages = NbreDePages + " pages");
  }
}

let serieNoire = new Livre(
  "La tour sombre1 - Le pistoléro",
  "Stephen King",
  250
);
let serieNoire2 = new Livre(
  "La tour sombre2 - Les trois cartes",
  "Stephen King",
  267
);
let serieNoire3 = new Livre(
  "La tour sombre3 - Terres perdues",
  "Stephen King",
  528
);

//Extension de la class "Livre"
class Avis extends Livre {
//Mise en place du constructor avec les key "Titre" et "Note"
  constructor (Titre, Note) {
    //Récupération de la key de "Livre"
    super(Titre)
    //Déclaration de "Note"
    this.Note = Note
  }
affichage() {
  return `le livre ${this.Titre} est noté ${this.Note}`;
}
}
const avis01 = new Avis ("La tour sombre", "très bien")
console.log(avis01.affichage());
//console.log(Avis);


// https://www.youtube.com/watch?v=PKjDWbeKUUU&list=PLF88SKt6r7NbipYFd8-xPRAgelSNMTQgm   (49)
// https://leblogducodeur.fr/fetch-javascript/