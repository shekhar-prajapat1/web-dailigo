// backend/services/authService.js
const db = require('../db');

// Register user
const register = (req, res) => {
    const { username, password } = req.body;
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (error, results) => {
        if (error) return res.status(400).json({ message: error.message });
        res.status(201).json({ id: results.insertId, username });
    });
};

// Login user
const login = (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (error, results) => {
        if (error) return res.status(400).json({ message: error.message });
        if (results.length > 0) {
            res.json({ message: 'Login successful', user: results[0] });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
};

module.exports = { register, login };
