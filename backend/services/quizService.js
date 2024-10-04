// backend/services/quizService.js
const db = require('../db');

// Get all quizzes
const getQuizzes = (req, res) => {
    const query = 'SELECT * FROM quizzes';
    db.query(query, (error, results) => {
        if (error) return res.status(400).json({ message: error.message });
        res.json(results);
    });
};

// Create a new quiz
const createQuiz = (req, res) => {
    const { title, questions } = req.body;
    const query = 'INSERT INTO quizzes (title, questions) VALUES (?, ?)';
    db.query(query, [title, JSON.stringify(questions)], (error, results) => {
        if (error) return res.status(400).json({ message: error.message });
        res.status(201).json({ id: results.insertId, title, questions });
    });
};

module.exports = { getQuizzes, createQuiz };
