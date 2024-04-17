"use client";
import React from "react";
import { useState } from "react";
const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (<div className="form__container">
     <div className="principlae__form-inputs">
     
 
       <div className="input-container">
         <input type="text" placeholder="Depart | Entrer votre adresse de depart " />
       </div>

       <div id="second-input" className="input-container">
        <div className="black-line"></div>
         <input type="text" placeholder="Arrivée | Entrer votre adresse d’arrivée " />
       </div>
    


   </div>
     <div className="add-step-text">
        <p>+ Ajouter une étape</p>
      </div>
    <div className="form__date-inputs">
     

      <div className="form__date-inputs-left">
        <div className="input-container" style={{marginRight:"0.5rem"}}>
          <input type="text" placeholder="Aujourd’hui" />
        </div>
      </div>
      <div className="form__date-inputs-right">
        <div className="input-container" style={{marginRight:"0.5rem"}}>
          <input type="text" placeholder="Heures" />
        </div>

        <div className="input-container">
          <input type="text" placeholder="Minutes" />
        </div>
      </div>


    </div>

    <div className="form__principale-checkbox">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox">
        Dès que possible
      </label>

    </div>
    <p className="form__principale-text">Merci de bien vouloir saisir des adresses différentes</p>
    <button className="form__principale-btn">
      Voir le prix
    </button>
  </div>)
};

export default Form;
