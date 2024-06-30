import React, { useState } from 'react';
import './SearchBar.css';
import { searchTracks } from '../../services/spotifyService';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('Access token not available');
      }

      const tracks = await searchTracks(searchTerm, accessToken);
      onSearch(tracks); // Pass the fetched tracks to parent component
    } catch (error) {
      console.error('Error searching tracks:', error);
      // Handle error (e.g., display error message to user)
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
