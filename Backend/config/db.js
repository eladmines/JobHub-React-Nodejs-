const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: "postgres",
    username: "jobby",
    password: "12345678",
    host: "jobby.czkaa4kseikm.us-east-1.rds.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  });

module.exports = sequelize;
