import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import SearchArea from './components/SearchArea/SearchArea';
import FeaturedListings from './components/FeaturedListings/FeaturedListings';

function App() {
  return (
    <div>
      <Navbar />
      <SearchArea />
      <FeaturedListings />
    </div>
  );
}

export default App;
