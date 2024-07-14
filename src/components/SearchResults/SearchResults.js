import React from "react";
import "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ addTrackToPlaylist, tracklist }) {

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {tracklist && (
        <Tracklist
          addTrackToPlaylist={addTrackToPlaylist}
          tracks={tracklist}
          trackOrPlay="track"
        />
      )}
    </div>
  );
}

export default SearchResults;
