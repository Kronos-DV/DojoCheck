const express = require("express");
const db = require("./database");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("API DojoCheck funcionando!");
});

app.post("/alunos", async (req, res) => {
    const { nome, apelido, login, senha, faixa, grau } = req.body;

    const senhaHash = await bcrypt.hash(senha, 10);

    const comando = db.prepare(`
        INSERT INTO usuarios
        (nome, apelido, login, senha_hash, tipo, faixa, grau)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const resultado = comando.run(
        nome,
        apelido,
        login,
        senhaHash,
        "ALUNO",
        faixa,
        grau
    );

    res.json({
        mensagem: "Aluno cadastrado com sucesso!",
        id: resultado.lastInsertRowid
    });
});

app.get("/alunos", (req, res) => {
    const alunos = db.prepare(`
        SELECT id, nome, apelido, login, tipo, faixa, grau, ativo
        FROM usuarios
        WHERE tipo = 'ALUNO'
    `).all();

    res.json(alunos);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

