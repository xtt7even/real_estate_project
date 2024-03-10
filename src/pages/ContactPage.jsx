import React from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx"

import './ContactPage.css'

function ContactPage(props)
{
    return (
        <div id="ContactPage--container">
            <Navbar isDesktop={props.isDesktop}/>
            <ContactForm isDesktop={props.isDesktop}/>
            <Footer isDesktop={props.isDesktop}/>
        </div>
    );
}

export default ContactPage;