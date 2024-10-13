const { Client } = require('pg');

const client = new Client({
    database: "***", 
    user: "***",        
    password: "***",       
    host: "****",
    port: "*****",               
    ssl: {
        require: true,
        rejectUnauthorized: false,
    },
});

client.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("Connection error", err.stack));

module.exports = client;
