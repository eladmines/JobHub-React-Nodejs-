const { Client } = require('pg');

const client = new Client({
    database: "postgres",       // The database name from the environment variable
    user: "jobby",         // The user from the environment variable
    password: "12345678", // The password from the environment variable
    host: "jobby.czkaa4kseikm.us-east-1.rds.amazonaws.com",         // The host from the environment variable
    port: 5432,         // The port from the environment variable
    ssl: {
        require: true,                       // SSL is required
        rejectUnauthorized: false,           // Allow self-signed certificates (use with caution in production)
    },
});

client.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("Connection error", err.stack));

module.exports = client;
