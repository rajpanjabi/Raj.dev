'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark]=useState(false);

    useEffect(() => {
        // On initial load, check localStorage or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme ? savedTheme : prefersDark ? 'dark' : 'light';
    
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
        setIsDark(initialTheme === 'dark');
      }, []);

    const toggleTheme=()=>{
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
        setIsDark(!isDark);
    }

    return(<button onClick={toggleTheme} 
    className="p-2 rounded-full border text-sm font-medium dark:bg-gray-800 bg-gray-200 transition">
        {isDark?'🌞 Light' : '🌚 Dark'}

    </button>)
}