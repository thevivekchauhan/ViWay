import React, { useState } from 'react';
import { drawerContent } from '../data/drawerContent';

const Drawer = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (card) => {
        setActiveCard(card);
    };

    return (
        <div>
            {Object.keys(drawerContent).map((key) => (
                <div key={key} onClick={() => handleCardClick(key)}>
                    {drawerContent[key].title}
                </div>
            ))}
            {activeCard && (
                <div className="drawer medium-size" style={{ position: 'absolute', top: '50px' }}>
                    <h2>{drawerContent[activeCard].title}</h2>
                </div>
            )}
        </div>
    );
};

export default Drawer;
