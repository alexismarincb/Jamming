import React from 'react';
import './Playlist.css';
import Track from '../Track/Track';

function Playlist({ playlist, addTrackToPlaylist, removeTrackFromPlaylist, onSavePlaylist }) {
  const handleSavePlaylist = async () => {
    try {
      // Implement logic to save playlist to Spotify using API
      // Example: Call a function onSavePlaylist() passed from parent component
      await onSavePlaylist(playlist);
      alert('Playlist saved successfully!');
    } catch (error) {
      console.error('Error saving playlist:', error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <input value="New Playlist" />
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
          <button className="Playlist-save" onClick={handleSavePlaylist}>
            SAVE TO SPOTIFY
          </button>
        </>
      ) : (
        <h3>EMPTY PLAYLIST</h3>
      )}
    </div>
  );
}

export default Playlist;
