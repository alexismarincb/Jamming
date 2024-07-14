import React, { useState } from 'react';
import "./Playlist.css";
import Track from "../Track/Track";

function Playlist({ playlist, addTrackToPlaylist, removeTrackFromPlaylist, URIs }) {

  const [playlistName, setPlaylistName] = useState(''); // State for the playlist name

  const createPlaylistSpotify = async () => {
    // Fetch a new token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa('0b2a29a16f6c44fabe0635e67ccc8d78:abf9e898b0be405e84c58b50e54607a7')
      },
      body: 'grant_type=client_credentials'
    });

    if (tokenResponse.ok) {
      const tokenJson = await tokenResponse.json();
      const accessToken = tokenJson.access_token;

      // Create a new playlist
      const userId = 'alexismarincb'; // Replace with the actual user ID
      const createPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
      const createPlaylistResponse = await fetch(createPlaylistUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: playlistName,
          description: "Created on Jamming",
          public: false
        })
      });

      if (createPlaylistResponse.ok) {
        const playlistData = await createPlaylistResponse.json();
        console.log('Playlist created:', playlistData);

        // Add tracks to the playlist
        const addTracksUrl = `https://api.spotify.com/v1/playlists/${playlistData.id}/tracks`;
        const addTracksResponse = await fetch(addTracksUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            uris: [URIs] // Adds the tracks from the URIs state in AddSongs.js
          })
        });

        if (addTracksResponse.ok) {
          const addTracksData = await addTracksResponse.json();
          console.log('Tracks added:', addTracksData);
        } else {
          console.error('Failed to add tracks to playlist');
        }
      } else {
        console.error('Failed to create playlist');
      }
    } else {
      console.error('Failed to fetch access token');
    }
  };

  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <input
        placeholder="New Playlist"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
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
          <button className="Playlist-save" onClick={createPlaylistSpotify}>SAVE TO SPOTIFY</button>
          <button className="Playlist-save" onClick={""/*IDK YET, ASK ALEX */}>Temporary LOG IN button</button>
        </>
      ) : (
        <h3>EMPTY PLAYLIST</h3>
      )}
    </div>
  );
}

export default Playlist;
