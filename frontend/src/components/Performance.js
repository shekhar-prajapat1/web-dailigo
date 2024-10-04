// frontend/src/components/Performance.js
import React, { useState, useEffect } from 'react';
import { getPerformance, updatePerformance } from '../api';

const Performance = ({ userId }) => {
    const [marks, setMarks] = useState(0);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const fetchPerformance = async () => {
            const response = await getPerformance(userId);
            setMarks(response.data.marks);
            setFeedback(response.data.feedback);
        };
        fetchPerformance();
    }, [userId]);

    const handleUpdate = async () => {
        await updatePerformance(userId, marks, feedback);
    };

    return (
        <div>
            <h1>User Performance</h1>
            <p>Marks: {marks}</p>
            <p>Feedback: {feedback}</p>
            <input
                type="number"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                placeholder="Update Marks"
            />
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Update Feedback"
            />
            <button onClick={handleUpdate}>Update Performance</button>
        </div>
    );
};

export default Performance;
