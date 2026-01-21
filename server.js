require('dotenv').config();
const massagensRoutes = require('./routes/massagens.route');
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

app.use('/massagens', massagensRoutes)

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`)
})