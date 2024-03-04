import React from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx"

import './ContactPage.css'

function ContactPage()
{
    return (
        <div id="ContactPage--container">
            <Navbar />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default ContactPage;