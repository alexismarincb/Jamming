// Auth.js
import React, { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    const clientId = '0b2a29a16f6c44fabe0635e67ccc8d78';
    const clientSecret = 'abf9e898b0be405e84c58b50e54607a7'; // Replace with your actual client secret
    const redirectUri = 'http://localhost:3000/callback'; // Your registered redirect URI
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      const authToken = btoa(`${clientId}:${clientSecret}`);

      fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${authToken}`,
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUri,
        })
      })
      .then(response => response.json())
      .then(data => {
        const accessToken = data.access_token;
        const refreshToken = data.refresh_token;
        // Save tokens for future use (e.g., in local storage)
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        // Redirect or update state to show that the user is authenticated
        window.location.href = '/';
      })
      .catch(error => console.error('Error:', error));
    } else {
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent('playlist-modify-public')}&state=someRandomString`;

      window.location.href = authUrl; // Redirect user to Spotify authorization page
    }
  }, []);

  return <div>Redirecting to Spotify...</div>;
};

export default Auth;
