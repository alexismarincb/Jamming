import React from "react";
import "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ addTrackToPlaylist }) {
  const tracks = [
    { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
    { id: 3, name: "Track 3", artist: "Artist 3", album: "Album 3" },
    // Add more tracks as needed
  ];

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {tracks && (
        <Tracklist
          addTrackToPlaylist={addTrackToPlaylist}
          tracks={tracks}
          trackOrPlay="track"
        />
      )}
    </div>
  );
}
 
export default SearchResults;

//
