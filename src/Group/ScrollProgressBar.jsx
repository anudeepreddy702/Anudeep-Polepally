import React, { useState, useEffect } from 'react';

const ScrollProgressBar = ({ darkMode }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollableHeight = documentHeight - windowHeight;
            const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
            setScrollProgress(Math.min(progress, 100));
        };

        calculateScrollProgress();
        window.addEventListener('scroll', calculateScrollProgress, { passive: true });
        return () => window.removeEventListener('scroll', calculateScrollProgress);
    }, []);

    return (
        <div className="scroll-progress-container">
            <div
                className={`scroll-progress-bar ${darkMode ? 'dark' : 'light'}`}
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgressBar;