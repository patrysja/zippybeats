const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

// Wczytywanie zmiennych z pliku .env
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;  // Sprawdź, czy REDIRECT_URI jest poprawnie ustawione w .env

// Endpoint /login do rozpoczęcia autoryzacji
app.get("/login", (req, res) => {
  const scope = "user-read-private user-read-email playlist-read-private";
  const redirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  res.redirect(redirect);
});

// Endpoint /callback, który odbiera kod i wymienia go na tokeny
app.get("/callback", async (req, res) => {
  const code = req.query.code;

  // Sprawdzenie, czy kod istnieje w zapytaniu
  if (!code) {
    console.error("Brak kodu w zapytaniu");
    return res.status(400).json({ error: "Brak kodu w zapytaniu" });
  }

  try {
    // Wysłanie zapytania do Spotify w celu uzyskania tokenów
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,  // Musi być ten sam, jak w rejestracji aplikacji na Spotify
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    // Pobranie tokenów z odpowiedzi
    const { access_token, refresh_token } = response.data;
    console.log("Uzyskano tokeny:", access_token);
    res.json({ access_token, refresh_token });
  } catch (error) {
    console.error("Błąd przy uzyskiwaniu tokenu:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.response ? error.response.data : "Nie udało się uzyskać tokena." });
  }
});

// Endpoint do pobierania playlist, wykorzystujący access_token
app.get("/playlists", async (req, res) => {
  const { access_token } = req.query;

  if (!access_token) {
    return res.status(400).json({ error: "Brak tokenu dostępu." });
  }

  try {
    // Wysłanie zapytania do Spotify w celu pobrania playlist
    const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    res.json(response.data);  // Zwrócenie danych z playlistami
  } catch (error) {
    console.error("Błąd podczas pobierania playlist:", error);
    res.status(500).json({ error: "Nie udało się pobrać playlist." });
  }
});

// Uruchamiamy serwer na porcie 4000
app.listen(4000, () => {
  console.log("✅ Backend działa na http://127.0.0.1:4000");
});
