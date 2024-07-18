import React, { useState } from 'react';
import "./Playlist.css";
import Track from "../Track/Track";

function Playlist({ playlist, addTrackToPlaylist, removeTrackFromPlaylist, URIs }) {

  const [playlistName, setPlaylistName] = useState(''); // State for the playlist name

  const createPlaylistSpotify = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get("access_token");

    if (!accessToken) {
      console.error('Access token is missing');
      return;
    }

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
          uris: URIs // Passing URIs directly  (YOU NEED TO ARRAY [])
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
          <button className="Playlist-save" onClick={() => window.location.href = 'http://localhost:4000/login'}>Temporary LOG IN button</button>
        </>
      ) : (
        <h3>EMPTY PLAYLIST</h3>
      )}
    </div>
  );
}

export default Playlist;
