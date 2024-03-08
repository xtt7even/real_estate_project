import React from "react";

import Navbar from '../components/Navbar/Navbar';
import SearchArea from '../components/SearchArea/SearchArea';
import FeaturedListings from '../components/Listings/SmallListings/SmallFeaturedListings';
import WhyHomelty from '../components/WhyHomelty/WhyHomelty';
import Footer from '../components/Footer/Footer';

function HomePage(props)
{
    return (
        <div>
            <Navbar isDesktop={props.isDesktop}/>
            <SearchArea isDesktop={props.isDesktop}/>
            {props.isDesktop && <FeaturedListings isDesktop={props.isDesktop}/>}
            <WhyHomelty isDesktop={props.isDesktop}/>
            {props.isDesktop && <Footer isDesktop={props.isDesktop}/>}
        </div>
    );
}

export default HomePage;