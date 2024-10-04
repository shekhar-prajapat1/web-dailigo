// backend/services/performanceService.js
const db = require('../db');

// Get performance data
const getPerformance = (req, res) => {
    const userId = req.params.userId;
    const query = 'SELECT * FROM performance WHERE userId = ?';
    db.query(query, [userId], (error, results) => {
        if (error) return res.status(400).json({ message: error.message });
        res.json(results);
    });
};

// Update performance data
const updatePerformance = (req, res) => {
    const userId = req.params.userId;
    const { marks, feedback } = req.body;
    const query = 'UPDATE performance SET marks = ?, feedback = ? WHERE userId = ?';
    db.query(query, [marks, feedback, userId], (error) => {
        if (error) return res.status(400).json({ message: error.message });
        res.json({ userId, marks, feedback });
    });
};

module.exports = { getPerformance, updatePerformance };
