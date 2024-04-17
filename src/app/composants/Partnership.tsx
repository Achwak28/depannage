import React from "react";
import {availability} from '../constants'



const Partnership = () => {
  const AvailabilityBox = ({ title, content, backgroundColor, color }) => {
    const boxStyle = {
      backgroundColor: backgroundColor,
      color: color || 'white' 
    };
    return (
      <div className="availability_box" style={boxStyle}>
        <p className="availability__box-title">{title}</p>
        <p className="availability__box-text">{content}</p>
      </div>
    );
  };
  return (
    <div>
    <div className="partnership__container">
      <div className="partnership__container-overlay"></div>
      <div className="partnership__content">
        <p className="partnership__content-title">
          Vous êtes une société <br/> de transport?
        </p>
        <p className="partnership__content-text">SDevenez partenaire de Supervan et développez<br/>
          votre activité tout en maîtrisant votre emploi du<br/>
          temps.</p>
        <button className="partnership__content-btn">
          Créer un compte professionnel
        </button>
      </div>
    </div>
    <div className="availability__container">
      <div className="availability_boxes">
      {availability.map((item) => (
            <AvailabilityBox
              key={item.id}
              title={item.title}
              content={item.content}
              backgroundColor={item.backgroundColor}
              color={item.color}
            />
          ))}
      </div>
    </div>
    </div>
  )
};

export default Partnership;
