// Auth.js
import React, { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    const clientId = '0b2a29a16f6c44fabe0635e67ccc8d78';
    const redirectUri = 'http://localhost:3000/callback'; // Your registered redirect URI
    const scope = 'playlist-modify-public';
    const state = 'someRandomString'; // You can generate this dynamically

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&state=${state}`;

    window.location.href = authUrl; // Redirect user to Spotify authorization page
  }, []);

  return <div>Redirecting to Spotify...</div>;
};

export default Auth;
