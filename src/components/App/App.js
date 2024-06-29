import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import AddSongs from "../AddSongs/AddSongs";

function App() {
  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar />
      <div className="App-playlist">
        <AddSongs/>
      </div>
    </div>
  );
}
 
export default App;
