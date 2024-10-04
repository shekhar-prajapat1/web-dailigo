// backend/models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Adjust the path according to your project structure

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Sync the model with the database (use with caution in production)
User.sync()
    .then(() => {
        console.log("User model synced with the database.");
    })
    .catch(err => {
        console.error("Error syncing User model: ", err);
    });

module.exports = User;
