import React from "react";

const LogoDeveloppeur = () => {
  return (
    <div className="containerLogoDev">
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/html5.png"}
        className="logoDev"
        alt="logo_Html5"
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/css3.png"} 
        className="logoDev" 
        alt="logo_Css3" 
        />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/sass.png"} 
        className="logoDev" 
        alt="logo_Sass" 
        />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/Javascript.png"}
        className="logoDev"
        alt="logo_Javascript"
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/react.png"}
        className="logoDev"
        alt="logo_React"
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/nodejs.png"}
        className="logoDev"
        alt="logo_NodeJs"
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/npm.png"} 
        className="logoDev" 
        alt="logo_Npm" 
        />
    </div>
  );
};

export default LogoDeveloppeur;
