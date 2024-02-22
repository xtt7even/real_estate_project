import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AllListings from "../components/Listings/SmallListings/SmallAllListings";
import Footer from "../components/Footer/Footer" 

// import ListingBig from "../components/Listings/ListingBig"

import "./ListingsPage.css"
function ListingsPage()
{

    return (
        <div>
            <Navbar />
            <div className="ListingsPage--container">
                <AllListings />
            </div>
            <Footer />
        </div>
    );
}

export default ListingsPage;