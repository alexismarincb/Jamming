import React, { useState } from "react";
import "./Playlist.css";
import Track from "../Track/Track";

function Playlist({ playlist, addTrackToPlaylist }) {
  // This function adds a track to the playlist

  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <input value="New Playlist" />
      {playlist.length > 0 ? (
        <>
          {playlist.map((track) => (
            <Track
              key={track.id}
              track={track}
              addTrackToPlaylist={addTrackToPlaylist}
            />
          ))}
          <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </>
      ) : (
        <h3>EMPTY PLAYLIST</h3>
      )}
    </div>
  );
}

export default Playlist;
