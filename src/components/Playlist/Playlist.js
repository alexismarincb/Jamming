// Playlist.js
import React, { useState } from 'react';
import "./Playlist.css";
import Track from "../Track/Track";

function Playlist({ playlist, addTrackToPlaylist, removeTrackFromPlaylist }) {
  const [playlistName, setPlaylistName] = useState(''); // State for the playlist name

  const createPlaylistSpotify = async () => {
    // Fetch a new token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', { // Fetching token from Spotify Accounts API
      method: 'POST', // Method to fetch token is POST
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // Header to specify the content type
        'Authorization': 'Basic ' + btoa('0b2a29a16f6c44fabe0635e67ccc8d78:abf9e898b0be405e84c58b50e54607a7') // Authorization header with base64-encoded client_id and client_secret
      },
      body: 'grant_type=client_credentials' // Body to specify grant type
    });

    if (tokenResponse.ok) { // Check if token response is okay
      const tokenJson = await tokenResponse.json(); // Parse token response as JSON
      const accessToken = tokenJson.access_token; // Extract access token from response

      // Create a new playlist
      const userId = 'alexismarincb'; // Replace with the actual user ID
      const urlToFetch = `https://api.spotify.com/v1/users/${userId}/playlists`; // Spotify API endpoint for creating a playlist
      const response = await fetch(urlToFetch, {
        method: 'POST', // Method to create a new playlist is POST
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Use the access token for authorization
          'Content-Type': 'application/json' // Specify content type as JSON
        },
        body: JSON.stringify({ // Send the playlist data in the request body
          name: playlistName, // Use the playlist name from the state
          description: "Created on Jamming",
          public: false
        })
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Playlist created:', jsonResponse); // Log the response from Spotify API
      } else {
        console.error('Failed to create playlist'); // Error message if playlist creation fails
      }
    } else {
      console.error('Failed to fetch access token'); // Error message if token fetching fails
    }
  };

  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <input
        placeholder="New Playlist"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)} /> 
      {playlist.length > 0 ? (
        <>
          {playlist.map((track) => (
            <Track
              key={track.id}
              track={track}
              addTrackToPlaylist={addTrackToPlaylist}
              removeTrackFromPlaylist={removeTrackFromPlaylist}
            />
          ))}
          <button className="Playlist-save" onClick={createPlaylistSpotify}>SAVE TO SPOTIFY</button> {/* Button to trigger playlist creation */}
        </>
      ) : (
        <h3>EMPTY PLAYLIST</h3>
      )}
    </div>
  );
}

export default Playlist;
