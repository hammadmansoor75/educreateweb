"use client";
import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div
      className='relative w-14 h-8 flex items-center dark:bg-slate-800 bg-gray-900 cursor-pointer rounded-lg p-1'
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className='text-white' size={14} />
      <div
        className='absolute bg-white dark:bg-medium w-4 h-4 rounded-full shadow-md transform transition-transform duration-300'
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
      <BsSunFill className='ml-auto text-yellow-400' size={14} />
    </div>
  );
};

export default ThemeToggler;
