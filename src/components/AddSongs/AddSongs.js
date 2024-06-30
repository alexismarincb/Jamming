import React, { useState } from "react";
import "./AddSongs.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";


function AddSongs() {
  const [playlist, setPlaylist] = useState([]);
  const addTrackToPlaylist = (track) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, track]); // Using functional update for state
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylist((prevPlaylist) => prevPlaylist.filter(item => item.id !== trackId));
};

  return (
    <div className="AddSongs">
        <SearchResults addTrackToPlaylist={addTrackToPlaylist} />
        <Playlist playlist={playlist} addTrackToPlaylist={addTrackToPlaylist} removeTrackFromPlaylist = {removeTrackFromPlaylist} />
      </div>
  );
}
 
export default AddSongs;
