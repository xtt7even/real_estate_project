import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {AllListings} from "../components/Listings/Listings";
import ListingFilters from "../components/ListingFilters/ListingFilters"
import Footer from "../components/Footer/Footer" 

import "./ListingsPage.css"
// import Listings from "../components/Listings/Listings_old"
function ListingsPage()
{

    return (
        <div>
            <Navbar />
            <div className="ListingsPage--container">
                <ListingFilters/>
                <AllListings />
            </div>
            <Footer />
        </div>
    );
}

export default ListingsPage;