// backend/routes/progress.js
const express = require('express');
const router = express.Router();
const { getProgress, updateProgress } = require('../services/progressService');

// Get user progress
router.get('/:userId', getProgress);

// Update user progress
router.put('/:userId', updateProgress);

module.exports = router;
