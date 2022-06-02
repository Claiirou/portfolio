import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="containerAbout">
        <div className="imgTitleName">
          <div className="imgName">
            <img src="./claire.png" alt="claire" />
          </div>
          <h2 className="aboutName">Claire</h2>
          <h2 className="aboutName">MACHET</h2>
        </div>
        <div className="paraAbout">
          <p className="titleAbout">
            Je suis Développeuse Web Fullstack Junior
          </p>
          <p className="paraAbout">
            Après avoir travaillé de nombreuses années dans le domaine
            juridique, j’ai eu envie de revenir à mes premiers amours et à mes
            appétences techniques.
          </p>
          <p className="paraAbout">
            Ainsi, j’ai découvert les formations intensives chez la Wild Code
            School et me voilà lancée dans l'aventure du développement web{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
