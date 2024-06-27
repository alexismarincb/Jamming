import React from 'react';
import './Track.css';

function Track({ track }) { // Destructure props directly here
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>Track Name: {track.name}</h3> {/* Corrected props.tracks.name to track.name */}
                <p>Artist: {track.artist} | Album: {track.album}</p> {/* Display artist and album */}
            </div>
            <button className="Track-action">+</button>
        </div>
    );
}

export default Track;
