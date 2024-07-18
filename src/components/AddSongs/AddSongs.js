import React, { useState } from "react";
import "./AddSongs.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";

function AddSongs() {
  const [playlist, setPlaylist] = useState([]);
  const [uris, setUris] = useState([]);

  const addTrackToPlaylist = (track) => {
    setPlaylist((prevPlaylist) => {
      const updatedPlaylist = [...prevPlaylist, track];
      // Update uris state to be an array of strings
      const urisArray = updatedPlaylist.map((t) => `spotify:track:${t.id}`);
      setUris(urisArray);
      return updatedPlaylist;
    });
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylist((prevPlaylist) => {
      const updatedPlaylist = prevPlaylist.filter(item => item.id !== trackId);
      const urisArray = updatedPlaylist.map((t) => `spotify:track:${t.id}`);
      setUris(urisArray);
      return updatedPlaylist;
    });
  };

  const [listOfSongs, setListOfSongs] = useState([]);

  const handleChildData = (data) => {
    setListOfSongs(data);
  };

  console.log(listOfSongs); // To check if the array/object looks fine

  return (
    <div className="AddSongs">
      <div className="SearchBar">
        <SearchBar sendData={handleChildData} />
      </div>
      <div className="ResultsAndPlaylist">
        <SearchResults addTrackToPlaylist={addTrackToPlaylist} tracklist={listOfSongs} />
        <Playlist 
          playlist={playlist} 
          addTrackToPlaylist={addTrackToPlaylist} 
          removeTrackFromPlaylist={removeTrackFromPlaylist} 
          URIs={uris} // Pass URIs as an array
        />
      </div>
    </div>
  );
}

export default AddSongs;

