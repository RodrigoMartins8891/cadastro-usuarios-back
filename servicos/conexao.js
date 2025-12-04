// pool.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYFQ_MYSQL_HOST,      // <--- MUDANÇA AQUI
    user: process.env.MYFQ_MYSQL_USER,      // <--- MUDANÇA AQUI
    password: process.env.MYFQ_MYSQL_PASSWORD, // <--- MUDANÇA AQUI
    database: process.env.MYFQ_MYSQL_DATABASE, // <--- MUDANÇA AQUI
    port: process.env.MYFQ_MYSQL_PORT        // <--- MUDANÇA AQUI
});

export default pool;

