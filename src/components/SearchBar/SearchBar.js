import React, { useState } from 'react';
import './SearchBar.css';
import { searchTracks } from '../SpotifyService/SpotifyService';

function SearchBar({ sendData }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const urlToFetch = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`;
    const response = await fetch(urlToFetch, {
      headers: {
        Authorization: 'Bearer BQCwTvR3voncxETl3kFvc16cpiH0nfB03J7L60sumQjFrjVfu_wyK2e0i-fx6W151i13UtbmCbPHQKIpz8n-8VaSeR_SFzQgSyUiUMg_yUqpXKXIB7U'
      }
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const parsedData = jsonResponse.tracks.items; // Array of track objects

      // Check if there are tracks found
      if (parsedData.length > 0) {
        const tracksArray = parsedData.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name
        }));

        sendData(tracksArray);
      } else {
        console.error('No tracks found');
      }
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
