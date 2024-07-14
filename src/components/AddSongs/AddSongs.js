import React, { useState } from "react";
import "./AddSongs.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";

function AddSongs() {
  const [playlist, setPlaylist] = useState([]);
  const [uris, setUris] = useState('');


  const addTrackToPlaylist = (track) => {
    setPlaylist((prevPlaylist) => {
      const updatedPlaylist = [...prevPlaylist, track];
      // Anonymous function to create URIs and set state
      const urisString = updatedPlaylist.map((t) => `spotify:track:${t.id}`).join(',');
      setUris(urisString);
      return updatedPlaylist;
    });
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylist((prevPlaylist) => prevPlaylist.filter(item => item.id !== trackId));
  };


  
  const [listOfSongs, setListOfSongs] = useState([]);

  const handleChildData = (data) => {
    setListOfSongs(data);
  };

  console.log(listOfSongs)//To check if the array/object looks fine

  return (
    <div className="AddSongs">
      <div className="SearchBar">
        <SearchBar sendData={handleChildData}/>
      </div>
      <div className="ResultsAndPlaylist">
        <SearchResults addTrackToPlaylist={addTrackToPlaylist} tracklist={listOfSongs}/>
        <Playlist playlist={playlist} addTrackToPlaylist={addTrackToPlaylist} removeTrackFromPlaylist={removeTrackFromPlaylist} URIs ={uris}/>
      </div>
    </div>
  );
}

export default AddSongs;
