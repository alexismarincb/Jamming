import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ sendData }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    // Fetch a new token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', { // New: Fetching token from Spotify Accounts API
      method: 'POST', // New: Method to fetch token is POST
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // New: Header to specify the content type
        'Authorization': 'Basic ' + btoa('0b2a29a16f6c44fabe0635e67ccc8d78:abf9e898b0be405e84c58b50e54607a7') // New: Authorization header with base64-encoded client_id and client_secret
      },
      body: 'grant_type=client_credentials' // New: Body to specify grant type
    });

    if (tokenResponse.ok) { // New: Check if token response is okay
      const tokenJson = await tokenResponse.json(); // New: Parse token response as JSON
      const accessToken = tokenJson.access_token; // New: Extract access token from response

      // Use the fetched token to search for the track
      const urlToFetch = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`;
      const response = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer ${accessToken}` // Modified: Use the new access token for authorization
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
      } else {
        console.error('Failed to fetch track data'); // New: Error message if track fetching fails
      }
    } else {
      console.error('Failed to fetch access token'); // New: Error message if token fetching fails
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
