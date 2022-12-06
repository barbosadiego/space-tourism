import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Crew from './pages/Crew';
import Destination from './pages/Destination';

import Home from './pages/Home';
import Technology from './pages/Tecnology';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia('(min-width: 1100px)').matches) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      <Header
        isMobile={isMobile}
        isDesktop={isDesktop}
        setIsMobile={setIsMobile}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isMobile={isMobile}
                isDesktop={isDesktop}
                setIsMobile={setIsMobile}
              />
            }
          />
          <Route
            path="/destination"
            element={
              <Destination
                isMobile={isMobile}
                isDesktop={isDesktop}
                setIsMobile={setIsMobile}
              />
            }
          />
          <Route
            path="/crew"
            element={
              <Crew
                isMobile={isMobile}
                isDesktop={isDesktop}
                setIsMobile={setIsMobile}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <Technology
                isMobile={isMobile}
                isDesktop={isDesktop}
                setIsMobile={setIsMobile}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
