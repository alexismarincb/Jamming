import React, { useState } from "react";
import "./AddSongs.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";

function AddSongs() {
  const [playlist, setPlaylist] = useState([]);
  const addTrackToPlaylist = (track) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylist((prevPlaylist) => prevPlaylist.filter(item => item.id !== trackId));
  };

  const [listOfSongs, setListOfSongs] = useState([]);

  return (
    <div className="AddSongs">
      <div className="SearchBar">
        <SearchBar />
      </div>
      <div className="ResultsAndPlaylist">
        <SearchResults addTrackToPlaylist={addTrackToPlaylist} />
        <Playlist playlist={playlist} addTrackToPlaylist={addTrackToPlaylist} removeTrackFromPlaylist={removeTrackFromPlaylist} />
      </div>
    </div>
  );
}

export default AddSongs;
