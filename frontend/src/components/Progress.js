import React, { useState, useEffect } from 'react';
import { getProgress, updateProgress } from '../api';

const Progress = ({ userId }) => {
    const [progress, setProgress] = useState(null);
    
    useEffect(() => {
        const fetchProgress = async () => {
            const data = await getProgress(userId);
            setProgress(data);
        };
        fetchProgress();
    }, [userId]);

    const handleUpdateProgress = async () => {
        const newProgressData = { /* new data */ };
        const updatedProgress = await updateProgress(userId, newProgressData);
        setProgress(updatedProgress);
    };

    return (
        <div>
            <h1>User Progress</h1>
            {progress ? (
                <div>
                    <p>{JSON.stringify(progress)}</p>
                    <button onClick={handleUpdateProgress}>Update Progress</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Progress;
