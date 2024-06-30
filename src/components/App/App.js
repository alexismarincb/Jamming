// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import AddSongs from "../AddSongs/AddSongs";
import Auth from "../Auth/Auth"; // Import the Auth component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      // Exchange the code for an access token and store it
      // This is where you'll add code to exchange the code for an access token
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <Auth />;
  }

  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar />
      <div className="App-playlist">
        <AddSongs />
      </div>
    </div>
  );
}

export default App;
