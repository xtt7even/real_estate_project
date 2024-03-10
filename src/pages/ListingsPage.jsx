import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AllListings from "../components/Listings/SmallListings/SmallAllListings";
import Footer from "../components/Footer/Footer" 

// import ListingBig from "../components/Listings/ListingBig"

import "./ListingsPage.css"
function ListingsPage(props)
{

    return (
        <div>
            <Navbar isDesktop={props.isDesktop}/>
            <div className="ListingsPage--container">
                <AllListings isDesktop={props.isDesktop}/>
            </div>
            <Footer isDesktop={props.isDesktop}/>
        </div>
    );
}

export default ListingsPage;