const { Client } = require('pg');

const client = new Client({
    database: "postgres",
    user: "jobby",
    password: "12345678",
    host: "jobby.czkaa4kseikm.us-east-1.rds.amazonaws.com",
    port: 5432,
    ssl: {
        require: true,
        rejectUnauthorized: false,
    },
});

client.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("Connection error", err.stack));

module.exports = client;
