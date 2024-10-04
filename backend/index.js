const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Import database connection
const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progress');
const subscriptionRoutes = require('./routes/subscription');
const quizRoutes = require('./routes/quiz');
const performanceRoutes = require('./routes/performance');

const app = express();
const PORT = 3001;

app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/performance', performanceRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Web DailiGo API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
