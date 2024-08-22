// src/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePages';

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
