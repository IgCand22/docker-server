const express = require('express')
const app = express();
const PORT = process.env.APP_PORT;

const pool = require('./db/pool');


app.use(express.json());

app.get('/', (req, res) => {
    try{
        res.status(200).json({ message: "Minha Esposa é gatona" })
    } catch (err) {
        console.error("O erro foi: "+err);
        res.status(500).json({ message: "Erro"})
    }
})

app.get('/massagens', async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM massagens');
        res.status(200).json(rows)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro no banco" })
    }
})

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`)
})