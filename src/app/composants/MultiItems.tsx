import React from "react";

interface SupervanItem {
    id: string;
    image: string;
    type: string;
    longueur: string;
    poids: string;
}

interface TrolleyItem {
    id: string;
    image: string;
    title: string;
    text: string;
}

type MultiItemsProps = {
    title: string;
    items: (SupervanItem | TrolleyItem)[];
    selectedItemIndex: number;
    onItemClick: (index: number) => void;
    textPosition?: string;
};

const MultiItems: React.FC<MultiItemsProps> = ({ title, items, selectedItemIndex, onItemClick, textPosition = 'top-left' }) => {
    return (
        <div className="multi-items-container">
            <div className="line"></div>
            <div className="multi-items-title">
                <p>{title}</p>
            </div>
            <div className="items">
                {items.map((item, index) => (
                    <div key={item.id} className={`item ${selectedItemIndex === index ? 'selected-item' : ''}`} onClick={() => onItemClick(index)}>
                        <img src={item.image} alt={"van"} />
                        <div className="item-details" style={{ color: selectedItemIndex === index ? "white" : "black", ...(textPosition === 'top-left' ? { top: '2rem', left: '2rem' } : { bottom: '1rem', right: '1rem' }) }}>
                            {('type' in item && 'longueur' in item && 'poids' in item) && (
                                <>
                                    <p>Type: <span>{item.type}</span> </p>
                                    <p>Longueur: <span>{item.longueur}</span> </p>
                                    <p>Poids: <span>{item.poids}</span> </p>
                                </>
                            )}
                            {('title' in item && 'text' in item) && (
                                <>
                                    <p>{item.title}</p>
                                    <p style={{ fontWeight: "400", marginBottom: "0.5rem" }}>{item.text}</p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiItems;
