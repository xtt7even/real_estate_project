import React from 'react';
import './Navbar.css' 
import logo from '../../images/logo2.png'

export default function Navbar () {
    return(
        <navbar className="Navbar">
            <div className="Navbar--branding">
                 <img className='Navbar--logo--img' src={logo}></img>
                 <h2 className='Navbar--brandname'>Homelty</h2>
            </div>
            <div className="Navbar--navigation">
                <button className='Navbar--nav--btn'>Home Page</button>
                <button className='Navbar--nav--btn'>Listings</button>
                <button className='Navbar--nav--btn'>About Us</button>
                <button className='Navbar--nav--btn'>Contact Us</button>
            </div>
        </navbar>
    );
}

//  Navbar();