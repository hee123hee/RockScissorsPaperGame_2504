import React from 'react';
import './Box.css';

const Box = (props) => {
    let img = props.item ? props.item.icon : '?';
    return (
        <div className={`Box Box_${props.result}`}>
            <h3>{props.title}</h3>
            <div className="game-icon-circle">{img}</div>
            <h4>{`${props.score} 점`}</h4>
            <h5>{props.result}</h5>
        </div>
    );
};

export default Box;