import React, { useState } from 'react';
import './Track.css';

function Track({ track, trackOrPlay }) {
    const [plusOrMinus, setPlusOrMinus] = useState(trackOrPlay === "track" ? "plus" : "minus");

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>Track Name: {track.name}</h3>
                <p>Artist: {track.artist} | Album: {track.album}</p>
            </div>
            {plusOrMinus === "plus" ? (
                <button className="Track-action">+</button>
            ) : (
                <button className="Track-action">-</button>
            )}
        </div>
    );
}

export default Track;
