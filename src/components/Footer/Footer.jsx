import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";
import logo_white from '../../images/logo3_white.png'

function Footer(props)
{

    const responsiveClass = {
        footer: props.isDesktop ? 'Footer--container' : 'Footer--container--mobile',
        branding: props.isDesktop ? 'Navbar--branding' : 'Navbar--branding--mobile',
        brandname: props.isDesktop ? 'Navbar--brandname' : 'Navbar--brandname--mobile',
        navigation: props.isDesktop ? 'Navbar--navigation' : 'Navbar--navigation--mobile'
    }

    return (
        <div id={responsiveClass.footer}>
            <div id="Footer--cropper">
                <div className="Footbar--section">
                    <div className="Footbar--branding">
                        <img id="Footbar--logo" src={logo_white}></img>
                        <h3>Homelty</h3>
                    </div>

                    <div className="Footbar--address">
                        <span>123 Main Street, City, State, ZIP</span> 
                        <span>Phone: (123) 456-7890</span>
                        <span>Email: info@homelty.com</span>
                    </div>

                    <div className="Footbar--copyright">
                        © 2024 Homelty. All rights reserved.
                    </div>
                </div>

                <div className="Footbar--section">
                    <h3>Navigation</h3>
                    <div className="Footbar--links">
                        <Link className="Footbar--link" to="/">Home</Link>
                        <Link className="Footbar--link" to="/listings">Listings</Link>
                        <Link className="Footbar--link" to="/aboutus">About Us</Link>
                        <Link className="Footbar--link" to="/contact">Contact</Link>
                    </div>
                </div>

                <div className="Footbar--section">
                    <h3>Social Media</h3>
                    <div className="Footbar--links">
                        <a href="https://here_is_your_url.com" className="Footbar--link">Instagram</a>
                        <a href="https://here_is_your_url.com" className="Footbar--link">Facebook</a>
                        <a href="https://here_is_your_url.com" className="Footbar--link">Twitter</a>
                        <a href="https://here_is_your_url.com" className="Footbar--link">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
