import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [primaryColor, setPrimaryColor] = useState(() => localStorage.getItem('primaryColor') || '#167D7F');

    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', theme === 'dark' ? '#1a1a1a' : '#ffffff');
        document.documentElement.style.setProperty('--text-color', theme === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#1a1a1a');
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', theme === 'dark' ? '#2e9b9d' : '#2563eb');
        document.documentElement.style.setProperty('--gray-text', theme === 'dark' ? '#d1d5db' : '#4b5563');
        localStorage.setItem('theme', theme);
        localStorage.setItem('primaryColor', primaryColor);
    }, [theme, primaryColor]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, primaryColor, setPrimaryColor }}>
            {children}
        </ThemeContext.Provider>
    );
};