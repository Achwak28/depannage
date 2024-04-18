'use client';
import React from "react";
import { useState } from "react";
import MultiItems from "../composants/MultiItems";
import { supervans, supervans2, trolley } from "../constants";
import "../style.css";

const page = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [selectedItemIndex2, setSelectedItemIndex2] = useState(0);
    const [selectedItemIndex3, setSelectedItemIndex3] = useState(0);

    const handleItemClick = (index: number) => {
        setSelectedItemIndex(index);
    };



    const handleItemClick2 = (index: number) => {
        setSelectedItemIndex2(index);
    };
    const handleItemClick3 = (index: number) => {
        setSelectedItemIndex3(index);
    };
    return <div className="commande__container">
        <div className="commande__hero">
            <img src="./assets/bg-commande.png" alt="commande background" className="commande__background" />
            <div className="hero__text">
                <p>Commande</p>
            </div>
        </div>
        <div className="red__p">
            <p>Pour les demandes passées moins de 2 heures ouvrée avant l'heure prévue de chargement, l'annulation de la course est facturée à 50% du prix de la course, soit 715.50€ . L'annulation est facturée à 100% du prix de la commande si le chauffeur a démarré son approche vers le point de chargement.</p>
        </div>
        <div className="choose__van">
            <div className="choose__van-left">
                <MultiItems
                    title="Choisissez le Supervan qui vous convient"
                    items={supervans}
                    selectedItemIndex={selectedItemIndex}
                    onItemClick={handleItemClick}
                    textPosition="bottom-right"
                />
                <MultiItems
                    title="Prestation de manutention"
                    items={trolley}
                    selectedItemIndex={selectedItemIndex2}
                    onItemClick={handleItemClick2}
                    textPosition="top-left"
                />
                <MultiItems
                    title="Choisissez le Supervan qui vous convient"
                    items={supervans2}
                    selectedItemIndex={selectedItemIndex3}
                    onItemClick={handleItemClick3}
                    textPosition="bottom-right"
                />
            </div>

            <div className="choose__van-right">
                <div className="price-box">
                    <p>
                        PRIX <br />
                        1 420,00€TTC 1 <br />
                        183,33€HT
                    </p>
                </div>
                <div className="van-arrival-detail-box">
                    <div className="edit-icon">
                        <img src='./assets/edit-icon.png' alt="edit icon" />
                    </div>
                    <div className="detail-date">
                        <p >
                            Le 22/03/2024 à 17h30
                        </p>
                    </div>

                    <div className="van-departure-arrived">
                        <div className="van-departure">
                            <img src='./assets/location-icon.png' alt="location icon" />
                            <div className="van-departure-content">
                                <p className="van-content-title">
                                    Départ
                                </p>
                                <p className="van-content-text">
                                    Aéroport Paris-Beauvais, Rte de l'Aéroport, 60000 Tillé, France
                                </p>
                            </div>

                        </div>
                        <div className="van-arrived">
                            <img src='./assets/location-icon.png' alt="location icon" />
                            <div className="van-arrived-content">
                                <p className="van-content-title">
                                    Arivée
                                </p>
                                <p className="van-content-text">
                                    Aéroport Paris-Beauvais, Rte de l'Aéroport, 60000 Tillé, France
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default page;
