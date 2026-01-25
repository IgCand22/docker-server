const db = require('../db/pool');

const createCliente = async (req, res) => {
    const { nome, qtd_massagem } = req.body;

    try{
        const [result] = await db.execute('INSERT INTO clientes (nome, qtd_massagem) VALUES (?, ?)', [nome, qtd_massagem]);
        res.status(200).json({ id: result.insertId, nome, qtd_massagem })
    } catch (error) {
        console.log(req.body)
        res.status(500).json({ error: error.message })
    }
};

const getCliente = async (req, res) => {
    try{
        const [rows] = await db.execute('SELECT * FROM clientes');
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

};

module.exports = { createCliente, getCliente };