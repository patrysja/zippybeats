const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const { connectToDb, sql } = require("./db");

const app = express();
app.use(cors());

// Wczytywanie zmiennych z pliku .env
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;  // Sprawdź, czy REDIRECT_URI jest poprawnie ustawione w .env

// Funkcja do pobierania wszystkich playlist
async function getAllPlaylists() {
  try {
    const pool = await connectToDb();
    console.log("Połączono z bazą danych.");
    const result = await pool.request().execute('GetAllPlaylists');
    return result.recordset;
  } catch (err) {
    console.error("Błąd podczas pobierania playlist:", err);
    throw err;
  }
}


// Funkcja do pobierania playlist po tagu
async function getPlaylistsByTag(tag) {
  try {
    const pool = await connectToDb();
    const result = await pool
      .request()
      .input("tag", sql.NVarChar, tag) // Parametr zapytania
      .execute('GetPlaylistsByTag');
    
    return result.recordset;
  } catch (err) {
    console.error("Błąd podczas pobierania playlist:", err);
    throw err;
  }
}

// Funkcja do pobierania wszystkich tagów
async function getAllTags() {
  try {
    const pool = await connectToDb();
    const result = await pool.request().execute('GetAllTags');
    return result.recordset;
  } catch (err) {
    console.error("Błąd podczas pobierania tagów:", err);
    throw err;
  }
}

// Endpoint /login do rozpoczęcia autoryzacji
app.get("/login", (req, res) => {
  const scope = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "streaming",
    "user-modify-playback-state",
    "user-read-playback-state"
  ].join(" ");

  const redirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  
  res.redirect(redirect);
});


// Endpoint /callback, który odbiera kod i wymienia go na tokeny
app.get("/callback", async (req, res) => {
  const code = req.query.code;

  // Sprawdzanie, czy kod istnieje w zapytaniu
  if (!code) {
    console.error("Brak kodu w zapytaniu");
    return res.status(400).json({ error: "Brak kodu w zapytaniu" });
  }

  // Sprawdzenie, czy kod autoryzacyjny już był używany (np. zapis do bazy danych)
  // Jeśli masz możliwość, możesz zapisać użyte kody w bazie danych, żeby nie były wykorzystywane wielokrotnie
  // Przykład sprawdzenia w bazie (pseudokod):
  // const codeUsed = await checkCodeInDatabase(code);
  // if (codeUsed) {
  //   return res.status(400).json({ error: "Kod już został wykorzystany." });
  // }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    console.log("Odpowiedź z Spotify:", response.data); // Logowanie odpowiedzi
    const { access_token, refresh_token } = response.data;
    res.json({ access_token, refresh_token });

    // Można zapisać kod jako użyty, jeśli chcesz zapobiec jego ponownemu wykorzystaniu
    // saveCodeToDatabase(code);

  } catch (error) {
    console.error("Błąd przy uzyskiwaniu tokenu:", error.response ? error.response.data : error.message);
    res.status(500).json({
      error: error.response ? error.response.data : "Nie udało się uzyskać tokena.",
    });
  }
});


// Endpoint do pobierania playlist, wykorzystujący access_token
// Endpoint /playlists — teraz zwraca playlisty z bazy danych
app.get("/playlists", async (req, res) => {
  try {
    const playlists = await getAllPlaylists(); // Dane z bazy
    res.json(playlists);
  } catch (err) {
    console.error("Błąd podczas pobierania playlist:", err);
    res.status(500).json({ error: "Nie udało się pobrać playlist z bazy danych." });
  }
});


// Endpoint do pobierania wszystkich playlist z bazy danych


// Endpoint do filtrowania playlist po tagu
app.get("/playlists/filter", async (req, res) => {
  const tag = req.query.tag; // Pobierz tag z query param

  try {
    const playlists = await getPlaylistsByTag(tag); // Wywołanie procedury składowanej
    res.json(playlists);
  } catch (err) {
    console.error("Błąd podczas filtrowania playlist:", err);
    res.status(500).json({ error: "Nie udało się przefiltrować playlist." });
  }
});

// Endpoint do pobierania tagów
app.get("/tags", async (req, res) => {
  try {
    const tags = await getAllTags(); // Wywołanie procedury składowanej
    res.json(tags);
  } catch (err) {
    console.error("Błąd podczas pobierania tagów:", err);
    res.status(500).json({ error: "Nie udało się pobrać tagów." });
  }
});

// Uruchamiamy serwer na porcie 4000
app.listen(4000, () => {
  console.log("✅ Backend działa na http://127.0.0.1:4000");
});
