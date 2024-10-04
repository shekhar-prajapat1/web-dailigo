const express = require('express');
const router = express.Router();
const performanceService = require('../services/performanceService');

// Sample route to get performance
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    // Implement logic to get user performance
    res.json({ userId, performance: 'Sample performance data' });
});

module.exports = router;
