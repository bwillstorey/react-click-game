import React from 'react';

export default function Card(props) {
    return (
        <div  className="card btn" onClick={props.handleClick}>
            <img 
                id={props.id} 
                key={props.id} 
                src={props.img} 
                alt={props.name} 
                className="img-fluid" 
            />
        </div>
    );
}