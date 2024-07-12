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

  const tracks = [
    { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
    { id: 3, name: "Track 3", artist: "Artist 3", album: "Album 3" },
    // Add more tracks as needed
  ];

  return (
    <div className="AddSongs">
      <div className="SearchBar">
        <SearchBar />
      </div>
      <div className="ResultsAndPlaylist">
        <SearchResults addTrackToPlaylist={addTrackToPlaylist} tracklist={tracks}/>
        <Playlist playlist={playlist} addTrackToPlaylist={addTrackToPlaylist} removeTrackFromPlaylist={removeTrackFromPlaylist} />
      </div>
    </div>
  );
}

export default AddSongs;
