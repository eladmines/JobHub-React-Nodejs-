const { Client } = require('pg');

const client = new Client({
    database: process.env.POSTGRES_DB,       // The database name from the environment variable
    user: process.env.POSTGRES_USER,         // The user from the environment variable
    password: process.env.POSTGRES_PASSWORD, // The password from the environment variable
    host: process.env.POSTGRES_HOST,         // The host from the environment variable
    port: process.env.POSTGRES_PORT,         // The port from the environment variable
    ssl: {
        require: true,                       // SSL is required
        rejectUnauthorized: false,           // Allow self-signed certificates (use with caution in production)
    },
});

client.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("Connection error", err.stack));

module.exports = client;
