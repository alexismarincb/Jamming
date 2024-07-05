import React, { useState } from 'react';
import './SearchBar.css';
import { searchTracks } from '../SpotifyService/SpotifyService';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const urlToFetch = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`
    const response = await fetch(urlToFetch, {
      //
      headers: { Authorization: 'Bearer BQBO83Zfsx5b9so1rl3WVB2qPjevW4bZjrhqHUapfn0KOUXz-FmDdQ3WO9cisNBNEYFot7H2En0e7TEL3Szh2swXVMVQ9j3JPBpkywWGJNcJ1XbrNwE' }
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
