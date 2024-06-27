import React, { useState } from 'react';
import './Track.css';

function Track({ track }) {
    const [plusOrMinus, setPlusOrMinus] = useState("yes");

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>Track Name: {track.name}</h3>
                <p>Artist: {track.artist} | Album: {track.album}</p>
            </div>
            {plusOrMinus === "yes" ? (
                <button className="Track-action">+</button>
            ) : (
                <button className="Track-action">-</button>
            )}
        </div>
    );
}

export default Track;
