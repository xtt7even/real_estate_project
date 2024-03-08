import React from 'react';
import './Navbar.css' 
import logo from '../../images/logo3.png'
import logoWhite from '../../images/logo3_white.png'
import mobileNavBtn from '../../images/three-horizontal-lines-icon.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

 function Navbar (props) {
    
    const responsiveClass = {
        navbar: props.isDesktop ? 'Navbar' : 'Navbar--mobile',
        branding: props.isDesktop ? 'Navbar--branding' : 'Navbar--branding--mobile',
        brandname: props.isDesktop ? 'Navbar--brandname' : 'Navbar--brandname--mobile',
        navigation: props.isDesktop ? 'Navbar--navigation' : 'Navbar--navigation--mobile'
    }

    const desktopNavs = [
        <Link to="/" className='Navbar--nav--btn'>Home Page</Link>,
        <Link to="/listings" className='Navbar--nav--btn'>Listings</Link>,
        <Link to="/aboutus" className='Navbar--nav--btn'>About Us</Link>,
        <Link to="/contact" className='Navbar--nav--btn'>Contact Us</Link>
    ]

    return(
        <nav className={responsiveClass.navbar} >
            <Link to="/" className={responsiveClass.branding}>
                <img className='Navbar--logo--img' src={props.isDesktop ? logo : logoWhite}></img>
                <h2 className={responsiveClass.brandname}>Homelty</h2>
            </Link>
            <div className={responsiveClass.navigation} >
                { props.isDesktop ? desktopNavs : <button id="Navbar--mobile--navbtn"><img src={mobileNavBtn} id="Navbar--mobile--navimg"></img></button>}
            </div>
        </nav>
    );
}

export default Navbar;