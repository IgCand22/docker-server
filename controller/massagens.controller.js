const db = require('../db/pool');

const createMassagem = async (req, res) => {
    const { id_cliente, tempo } = req.body;

    try{
        const [result] = await db.execute('INSERT INTO massagens (id_cliente, tempo) VALUES (?, ?)', [id_cliente, tempo]);
        res.status(201).json({ id: result.insertId, id_cliente, tempo })
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
};

const getMassagens = async (req, res) => {
    try{
        const [rows] = await db.execute(
            `SELECT 
                m.id_massagem, 
                c.nome AS nome_cliente, 
                DATE_FORMAT(m.data_massagem, '%Y-%m-%d') AS data_massagem, 
                m.tempo 
            FROM 
                massagens m 
            INNER JOIN 
                clientes c 
            ON 
                m.id_cliente = c.id_cliente;`
            );
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = { createMassagem, getMassagens };