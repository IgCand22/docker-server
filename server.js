require('dotenv').config();
const massagensRoutes = require('./routes/massagens.route');
const clientesRoutes = require('./routes/clientes.routes');
const express = require('express')
const app = express();
const cors = require('cors')
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    try{
        res.status(200).json({ message: "Servidor online" })
    } catch (err) {
        console.error("O erro foi: "+err);
        res.status(500).json({ message: "Erro"})
    }
})

app.use('/massagens', massagensRoutes);
app.use('/clientes', clientesRoutes);

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`)
})