const db = require('../db/pool');

const createMassagem = async (req, res) => {
    const { id, cliente, tempo } = req.body;

    try{
        const [result] = await db.execute('INSERT INTO massagens (id, cliente, tempo) VALUES (?, ?, ?)', [id, cliente, tempo]);
        res.status(201).json({ id: result.insertId, id, cliente, tempo })
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
};

const getMassagens = async (req, res) => {
    try{
        const [rows] = await db.execute('SELECT * FROM massagens');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { createMassagem, getMassagens };