import React from 'react';
import './Navbar.css' 
import logo from '../../images/logo3.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Navbar () {
    return(
        <nav className="Navbar">
            <Link to="/" className="Navbar--branding">
                 <img className='Navbar--logo--img' src={logo}></img>
                 <h2 className='Navbar--brandname'>Homelty</h2>
            </Link>
            <div className="Navbar--navigation">
                <Link to="/"className='Navbar--nav--btn'>Home Page</Link>
                <Link to="/listings" className='Navbar--nav--btn'>Listings</Link>
                <Link to="/aboutus" className='Navbar--nav--btn'>About Us</Link>
                <Link to="/contact" className='Navbar--nav--btn'>Contact Us</Link>
            </div>
        </nav>
    );
}

//  Navbar();