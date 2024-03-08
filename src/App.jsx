import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [windowSizeX, setWindowSizeX] = React.useState(window.innerWidth);

  React.useEffect(() => {

    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowSizeX(width)
    }

    updateDimensions ()

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize",updateDimensions);
  }, [])

  // React.useEffect(() => {
  //   console.log(windowSizeX);
  // }, [windowSizeX]); // This effect runs whenever windowSizeX changes

  const responsive = {
    isDesktop: windowSizeX > 1023,
  }

  return (
    <div>
      <Router>  {/* router-dom, adds multipage functionality */}
        <Routes>
          <Route path="/" element={<HomePage isDesktop = {responsive.isDesktop}/>} />
          <Route path="/listings" element={<ListingsPage  isDesktop = {responsive.isDesktop}/>} />
          <Route path="/aboutus" element={<HomePage isDesktop = {responsive.isDesktop}/>} />
          <Route path="/contact" element={<ContactPage isDesktop = {responsive.isDesktop}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
