import React from "react";

const MultiItems = ({ title, items, selectedItemIndex, onItemClick, textPosition  }) => {
    return (
        <div className="multi-items-container">
            <div className="line"></div>
            <div className="multi-items-title">
                <p>{title}</p>
            </div>
            <div className="items">
                {items.map((item, index) => (
                    <div key={item.id} className={`item ${selectedItemIndex === index ? 'selected-item' : ''}`} onClick={() => onItemClick(index)}>
                        <img src={item.image} alt="edit icon" />
                        {item.type && item.longueur && item.poids && (
                            <div className="item-details" style={{ color: selectedItemIndex === index ? "white" : "black", ...(textPosition === 'top-left' ? { top: '2rem', left: '2rem' } : { bottom: '1rem', right: '1rem' }) }}>
                                <p>Type: <span>{item.type}</span> </p>
                                <p>Longueur: <span>{item.longueur}</span> </p>
                                <p>Poids: <span>{item.poids}</span> </p>
                            </div>
                        )}
                        {item.title && item.text && (
                            <div className="item-details" style={{ color: selectedItemIndex === index ? "white" : "black", ...(textPosition === 'top-left' ? { top: '1rem', left: '2rem' } : { bottom: '1rem', right: '1rem' }) }}>
                                <p>{item.title}</p>
                                <p style={{fontWeight:"400", marginBottom:"0.5rem"}}>{item.text} </p>
                            </div>
                        )}

                    </div>
                ))}

            </div>
        </div>
    );
};

export default MultiItems;