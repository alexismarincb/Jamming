// src/components/SearchResults/SearchResults.js
import React, { useState, useEffect } from "react";
import "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist";
import { searchTracks } from "../../services/spotifyService";

function SearchResults({ addTrackToPlaylist }) {
  const [tracks, setTracks] = useState([]);
  const accessToken = localStorage.getItem('accessToken'); // Retrieve the access token

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await searchTracks('Your Search Query Here', accessToken);
        setTracks(fetchedTracks);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };

    if (accessToken) {
      fetchTracks();
    }
  }, [accessToken]);

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {tracks.length > 0 ? (
        <Tracklist
          addTrackToPlaylist={addTrackToPlaylist}
          tracks={tracks}
          trackOrPlay="track"
        />
      ) : (
        <p>No tracks found</p>
      )}
    </div>
  );
}

export default SearchResults;
