// backend/db.js
const { Sequelize } = require('sequelize');

// Replace these values with your actual database credentials
const sequelize = new Sequelize('web_dailigo', 'Shekhar', 'Shek@2005', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
