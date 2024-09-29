"use client"
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [courseData, setCourseData] = useState({});

  return (
    <DataContext.Provider value={{ courseData, setCourseData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
