// frontend/src/components/Quiz.js
import React, { useEffect, useState } from 'react';
import { getQuizzes, createQuiz } from '../api';

const Quiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState('');

    useEffect(() => {
        const fetchQuizzes = async () => {
            const response = await getQuizzes();
            setQuizzes(response.data);
        };
        fetchQuizzes();
    }, []);

    const handleCreateQuiz = async () => {
        await createQuiz(title, JSON.parse(questions));
        setTitle('');
        setQuestions('');
    };

    return (
        <div>
            <h1>Quizzes</h1>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz.id}>{quiz.title}</li>
                ))}
            </ul>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Quiz Title"
            />
            <textarea
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
                placeholder="Questions (JSON format)"
            />
            <button onClick={handleCreateQuiz}>Create Quiz</button>
        </div>
    );
};

export default Quiz;
