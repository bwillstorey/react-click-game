import React from 'react';

export default function Card(props) {
    return (
        <div id="game-img" className="container">

            {/* Iterate through the json object and render card images */}

            {props.musicians.map(musician => (
                <div
                    id={`card_${musician.id}`}
                    key={musician.id}
                    className="card btn"
                >
                    <img
                        src={musician.img}
                        alt={musician.name}
                        className="img-fluid"
                    />
                </div>
            ))}
        </div>
    );
}