const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

async function testeConnection() {
    try{
        const conn = await pool.getConnection();
        console.log("Conectado ao MySQL via pool");
        conn.release()
    } catch (err){
        console.error("Erro ao conectar no MySQL:" + err.message);
    }
}

testeConnection();

module.exports = pool;