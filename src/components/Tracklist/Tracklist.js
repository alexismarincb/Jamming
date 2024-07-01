// Tracklist.js
import React from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

function Tracklist({ tracks, trackOrPlay, addTrackToPlaylist }) {
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          trackOrPlay={trackOrPlay}
          addTrackToPlaylist={addTrackToPlaylist}
        />
      ))}
    </div>
  );
}

export default Tracklist;

