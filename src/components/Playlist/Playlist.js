import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist() {
  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <input value="New Playlist" />
      <Tracklist />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
