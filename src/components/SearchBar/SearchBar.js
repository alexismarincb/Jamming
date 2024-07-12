import React, { useState } from 'react';
import './SearchBar.css';
import { searchTracks } from '../SpotifyService/SpotifyService';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const urlToFetch = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`
    const response = await fetch(urlToFetch, {
      //
      headers: { Authorization: 'Bearer BQDAJS8Qp1omxhxkf8xurhWuJRyhuesYsC0FuDQOrkntWgM2NtExv1MFz4Pzzxp5F_Ec1HOu7ukK0dMZEXkRBZlTVRmqijhI0xkDUcunXYc9-OWU0tE' }
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse)
    }
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="SearchButton" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
