// Track.js
import React, { useState } from 'react';
import './Track.css';

function Track({ track, trackOrPlay, addTrackToPlaylist, removeTrackFromPlaylist }) {
  const [plusOrMinus, setPlusOrMinus] = useState(trackOrPlay === "track" ? "plus" : "minus");

  const handleAddToPlaylist = () => {
    addTrackToPlaylist({ ...track });
  };

  const handleRemoveFromPlaylist = () => {
    removeTrackFromPlaylist(track.id);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {plusOrMinus === "plus" ? (
        <button className="Track-action" onClick={handleAddToPlaylist}>+</button>
      ) : (
        <button className="Track-action" onClick={handleRemoveFromPlaylist}>-</button>
      )}
    </div>
  );
}

export default Track;
