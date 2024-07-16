import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(3600); // Set initial time to 1 hour in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="timer">
            <h1>Countdown Timer</h1>
            <p>Time remaining: {formatTime(timeLeft)}</p>
        </div>
    );
};

export default Timer;
