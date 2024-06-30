// src/services/spotifyService.js

const searchTracks = async (query, accessToken) => {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch tracks');
    }
  
    const data = await response.json();
    return data.tracks.items;
  };
  
  export { searchTracks };
  