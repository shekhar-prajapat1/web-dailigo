// backend/services/progressService.js
const db = require('../db');

// Get user progress
const getProgress = (req, res) => {
    const userId = req.params.userId;
    const query = 'SELECT * FROM progress WHERE userId = ?';
    db.query(query, [userId], (error, results) => {
        if (error) return res.status(400).json({ message: error.message });
        res.json(results);
    });
};

// Update user progress
const updateProgress = (req, res) => {
    const userId = req.params.userId;
    const { progress } = req.body;
    const query = 'UPDATE progress SET progress = ? WHERE userId = ?';
    db.query(query, [progress, userId], (error) => {
        if (error) return res.status(400).json({ message: error.message });
        res.json({ message: 'Progress updated successfully' });
    });
};

module.exports = { getProgress, updateProgress };
