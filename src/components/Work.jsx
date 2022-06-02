import React from "react";
import "../styles/work.css";

const Work = () => {
  return (
    <>
      <div className="hackathon1">
        <h1>01.</h1>
        <h1>COU-A-BOU-AR</h1>
        <p className="hackathon1Para">
          Hackhaton sur le thème de l'écologie : création d'un site en 24h, pour
          consommer de manière éco-responsable, par une équipe de 5 personnes.
          Langages utilisés : HTML, CSS, JavaScript, React, MySql Outils
          utilisés : Figma, Github
        </p>
        <button type="button">Site</button>
      </div>
      <div className="projet2"></div>
      <h1>02.</h1>
      <h1>INQUIZ'ITOR</h1>
      <p className="projet2Para">
        Développement d'un site internet quizz et création d'une API en six
        semaines par une équipe de de 4 personnes. Langages utilisés : HTML,
        CSS, JavaScript, React, MySql, NodeJS, ExpressJS Outils utilisés :
        Figma, Github, ZenHub, API OpenTrivia DB
      </p>
      <button type="button">Site</button>
      <div className="projet1"></div>
      <h1>03.</h1>
      <h1>TOKYO EXPRESS</h1>
      <p className="projet1Para">
        Réalisation d'un site statique en deux semaines sur le thème du Japon et
        plus précisément Tokyo par une équipe de de 5 personnes. Langages
        utilisés : HTML, CSS, JavaScript Outils utilisés : Figma, Github
      </p>
      <button type="button">Site</button>
    </>
  );
};

export default Work;
