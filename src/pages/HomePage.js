import React from "react";

import Navbar from '../components/Navbar/Navbar';
import SearchArea from '../components/SearchArea/SearchArea';
import FeaturedListings from '../components/Listings/SmallListings/SmallFeaturedListings';
import WhyHomelty from '../components/WhyHomelty/WhyHomelty';
import Footer from '../components/Footer/Footer';

function HomePage()
{
    return (
        <div>
            <Navbar/>
            <SearchArea/>
            <FeaturedListings/>
            <WhyHomelty/>
            <Footer/>
        </div>
    );
}

export default HomePage;