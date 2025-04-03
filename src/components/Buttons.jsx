import React from 'react';
import './buttons.css';
const Buttons = ({ userChoice, userPlay, isGameOver }) => {
    return (
        <div className="button-wrapper">
            {userChoice.map((item) => (
                <button className={isGameOver ? 'disabled' : ''} onClick={() => userPlay(item.name)}>
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default Buttons;