const Database = require("better-sqlite3");
const db = new Database("dojoCheck.db");

db.prepare(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        apelido TEXT,
        login TEXT NOT NULL UNIQUE,
        senha_hash TEXT NOT NULL,
        tipo TEXT NOT NULL,
        faixa TEXT,
        grau INTEGER DEFAULT 0,
        ativo INTEGER DEFAULT 1
    )
`).run();

module.exports = db;