import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const addTrackToPlaylist = (track) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, track]); // Using functional update for state
  };

  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults addTrackToPlaylist={addTrackToPlaylist} />
        <Playlist playlist={playlist} addTrackToPlaylist={addTrackToPlaylist} />
      </div>
    </div>
  );
}
 
export default App;
