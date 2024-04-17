import React from "react";
import Form from "./composants/Form";
import Features from "./composants/Features"
import Partnership from "./composants/Partnership"
import "./style.css";
const page = () => {
  return (
    <>
      <header className="hero">
        <div className="img__hero">
          <img src="./assets/1.jpg" alt="hero photo" />
          <div className="transparent__noir"></div>
 
        </div>

        <div className="content__hero">
          <h1 className="title__hero">Votre camionnette avec <span className="title__hero-span">chauffeur
            disponible dans l’heure.</span></h1>

          <div className="form__principale">
            <Form />
          </div>
        </div>
 

      </header>
      <main>
        <Features/>
        <Partnership/>
      </main>
    </>
  );
};

export default page;
