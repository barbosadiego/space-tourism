import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Tecnology';

const App = () => {
  const [isMobile, setIsMobile] = useState();
  const [isTablet, setIsTablet] = useState();
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    if (
      window.matchMedia('(min-width: 768px)').matches &&
      window.matchMedia('(max-width: 1099px)').matches
    ) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia('(min-width: 1100px)').matches) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  console.log('mobile ', isMobile);
  console.log('tablet ', isTablet);
  console.log('desktop ', isDesktop);

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
                isTablet={isTablet}
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
                isTablet={isTablet}
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
                isTablet={isTablet}
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
                isTablet={isTablet}
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
