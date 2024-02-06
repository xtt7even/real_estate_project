import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage.js'

function App() {
  return (
    <div>
      <Router>  {/* router-dom, adds multipage functionality */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
