import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import SearchArea from './components/SearchArea/SearchArea';
import FeaturedListings from './components/FeaturedListings/FeaturedListings';
import WhyHomelty from './components/WhyHomelty/WhyHomelty';

function App() {
  return (
    <div>
      <Navbar />
      <SearchArea />
      <FeaturedListings />
      <WhyHomelty />
    </div>
  );
}

export default App;
