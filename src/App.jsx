import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { WindowContext } from './contexts/windowContext';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Tecnology';

const App = () => {
  const { windowData, setWindowData } = useContext(WindowContext);

  // this funcion will check the size of browser window
  function checkWindowSize() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setWindowData({ ...windowData, mobile: true });
    } else if (
      window.matchMedia('(min-width: 768px)').matches &&
      window.matchMedia('(max-width: 1099px)').matches
    ) {
      setWindowData({ ...windowData, tablet: true });
    } else if (window.matchMedia('(min-width: 1100px)').matches) {
      setWindowData({ ...windowData, desktop: true });
    }
  }

  useEffect(() => {
    checkWindowSize();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
