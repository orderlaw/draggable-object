import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main.jsx'

import './global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Main} />
      </Routes>
    </Router>
  );
}

export default App;
