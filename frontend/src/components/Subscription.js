// frontend/src/components/Subscription.js
import React, { useEffect, useState } from 'react';
import { getSubscriptions, createSubscription } from '../api';

const Subscription = ({ userId }) => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [planId, setPlanId] = useState('');

    useEffect(() => {
        const fetchSubscriptions = async () => {
            const response = await getSubscriptions();
            setSubscriptions(response.data);
        };
        fetchSubscriptions();
    }, []);

    const handleCreateSubscription = async () => {
        await createSubscription(userId, planId);
        setPlanId('');
    };

    return (
        <div>
            <h1>Subscriptions</h1>
            <ul>
                {subscriptions.map((sub) => (
                    <li key={sub.id}>{`Plan ID: ${sub.planId}`}</li>
                ))}
            </ul>
            <input
                type="text"
                value={planId}
                onChange={(e) => setPlanId(e.target.value)}
                placeholder="Enter Plan ID"
            />
            <button onClick={handleCreateSubscription}>Create Subscription</button>
        </div>
    );
};

export default Subscription;
