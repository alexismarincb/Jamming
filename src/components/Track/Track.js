import React from 'react';
import './Track.css';

function Track({ track }) { // Destructure props directly here
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>Track Name: {track.name}</h3> 
                <p>Artist: {track.artist} | Album: {track.album}</p> 
            </div>
            <button className="Track-action">+</button>
        </div>
    );
}

export default Track;
