import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import SearchArea from './components/SearchArea/SearchArea';

function App() {
  return (
    <div>
      <Navbar />
      <SearchArea />
    </div>
  );
}

export default App;
