import React from 'react';
import './Track.css';


const tracks = [
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' }
    // Add more tracks as needed
  ];


function Track() {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Track Name: {tracks[0].name} </h3>
        <p>Artist: {tracks[0].artist} | Album: {tracks[0].album}</p>
      </div>
      <button className="Track-action">+</button>
    </div>
  );
}

export default Track;
