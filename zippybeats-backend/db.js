const sql = require("mssql");

const dbConfig = {
  server: process.env.DB_SERVER, // adres serwera SQL
  database: process.env.DB_NAME, // nazwa bazy danyc
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true, // włącz szyfrowanie (dla Azure SQL)
    trustServerCertificate: true, // jeśli używasz lokalnej bazy
  },
};

async function connectToDb() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("Połączono z bazą danych!");
    return pool;
  } catch (err) {
    console.error("Błąd połączenia z bazą danych: ", err);
    throw err;
  }
}

module.exports = { connectToDb, sql };

console.log("Konfiguracja DB:", dbConfig);

