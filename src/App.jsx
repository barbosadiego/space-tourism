import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Crew from './pages/Crew';
import Destination from './pages/Destination';

import Home from './pages/Home';
import Technology from './pages/Tecnology';

const App = () => {
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
