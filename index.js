const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const songs = [
  { id: 1, title: "Sunny Days", artist: "The Wanderers" },
  { id: 2, title: "Night Drive", artist: "Echo Lane" },
  { id: 3, title: "Paper Boats", artist: "Marina Kite" }
];

app.get('/', (req, res) => {
  res.send('<h1>🎵 Tiny Music Player</h1><p>Visit <a href="/songs">/songs</a> to see the playlist.</p>');
});

app.get('/songs', (req, res) => {
  res.json(songs);
});

app.listen(PORT, () => {
  console.log(`Tiny Music Player running on port ${PORT}`);
});