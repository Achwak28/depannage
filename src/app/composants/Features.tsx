import React from "react";
import { useState } from "react";
import { features, reviews } from '../constants';
import Review from './Review';

const Features = () => {
    return (
        <div className="features__container">
            <p className="features__p-text">Disponible dans l’heure</p>
            <p className="features__title">Réservez un Supervan <br/> en toute simplicité.</p>

            <div className="features__list">
                {features.map((item) => (
                    <div key={item.id} className="features__list-item">
                        <img className="item__image" src={item.image} alt="features photo" />
                        <div className="item__text">
                            <p className="features__item-title">{item.title}</p>
                            <p className="features__item-text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="features__p-text">Disponible dans l’heure</p>
            <p className="features__title">Réservez un Supervan <br/> en toute simplicité.</p>
            <div className="mission__text">
                <div className="mission__text-left">
                    <div className="line"></div>
                    <p className="mission__letf-title">Notre métier : le transport express du lourd et du volumineux</p>
                    <div className="mission__left-p">
                        <p>
                            Supervan est la façon la plus simple, rapide et économique de transporter de la marchandise d’un point à un autre.  En 3 clics sur supervan.fr, vous pouvez faire une estimation et réserver instantanément votre camion avec chauffeur pour transporter de la marchandise ou vos propres affaires.
                        </p>
                    </div>
                </div>
                <div className="mission__text-right">
                    <img src="./assets/12.png" alt="mission photo" />
                    <img style={{marginTop:"2rem"}} src="./assets/13.png" alt="mission photo" />
                </div>
            </div>

            <div className="reviews__container">
                <p className="features__p-text">Disponible dans l’heure</p>
                <p className="features__title">Reviews</p>
                <div className="reviews">
                {reviews.map((review) => (
                    <Review key={review.id} title={review.title} content={review.content}
                    picture={review.user.image} 
                    name={review.user.name}
                    role={review.user.role} />
                ))}
                </div>
              
            </div>
        </div>
    );
};

export default Features;
