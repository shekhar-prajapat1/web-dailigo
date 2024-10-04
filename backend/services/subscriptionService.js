// backend/services/subscriptionService.js
const db = require('../db');

// Get all subscriptions
const getSubscriptions = (req, res) => {
    const query = 'SELECT * FROM subscriptions';
    db.query(query, (error, results) => {
        if (error) return res.status(400).json({ message: error.message });
        res.json(results);
    });
};

// Create a new subscription
const createSubscription = (req, res) => {
    const { userId, planId } = req.body;
    const query = 'INSERT INTO subscriptions (userId, planId) VALUES (?, ?)';
    db.query(query, [userId, planId], (error, results) => {
        if (error) return res.status(400).json({ message: error.message });
        res.status(201).json({ id: results.insertId, userId, planId });
    });
};

module.exports = { getSubscriptions, createSubscription };
