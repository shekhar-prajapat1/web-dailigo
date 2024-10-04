const API_URL = 'http://localhost:3001/api'; // Adjust if necessary

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};

// Sample function to get user progress
export const getProgress = async (userId) => {
    const response = await fetch(`${API_URL}/progress/${userId}`);
    return response.json();
};

// Sample function to update user progress
export const updateProgress = async (userId, progressData) => {
    const response = await fetch(`${API_URL}/progress/${userId}`, {
        method: 'PUT', // Assuming you're using PUT to update progress
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(progressData),
    });
    return response.json();
};

// Sample function to get user subscriptions
export const getSubscriptions = async (userId) => {
    const response = await fetch(`${API_URL}/subscription/${userId}`);
    return response.json();
};

// Sample function to create a new subscription
export const createSubscription = async (userId, subscriptionData) => {
    const response = await fetch(`${API_URL}/subscription/${userId}`, {
        method: 'POST', // Assuming you're using POST to create a subscription
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData),
    });
    return response.json();
};

// Sample function to get user quizzes
export const getQuizzes = async (userId) => {
    const response = await fetch(`${API_URL}/quiz/${userId}`);
    return response.json();
};

// Sample function to create a new quiz
export const createQuiz = async (userId, quizData) => {
    const response = await fetch(`${API_URL}/quiz/${userId}`, {
        method: 'POST', // Assuming you're using POST to create a quiz
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
    });
    return response.json();
};

// Sample function to get user performance
export const getPerformance = async (userId) => {
    const response = await fetch(`${API_URL}/performance/${userId}`);
    return response.json();
};

// Sample function to update user performance
export const updatePerformance = async (userId, performanceData) => {
    const response = await fetch(`${API_URL}/performance/${userId}`, {
        method: 'PUT', // Assuming you're using PUT to update performance
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(performanceData),
    });
    return response.json();
};
