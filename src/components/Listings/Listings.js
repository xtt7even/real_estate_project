import React, { useState } from "react";
import propertyList from './properties_temp.json';
import ListingSmallCard from "./ListingSmallCard";

import "./Listings.css"

//Using local template JSON for now, as there is no API

function MakeListingsCards(properties, isFeatured)
{
    const cardAmount = isFeatured ? 3 : properties.length;
    console.log(properties.length)
    const listingsArr = properties.map((property) => 
        {
            if (property.id <= cardAmount) //temporary because hardcoded for now, should pick random listings everytime
            {
                return <ListingSmallCard 
                    key={property.id}
                    image={property.photos[0]}
                    price={property.price}
                    listingType={property.propertyType}
                    numberOfBedrooms={property.numOfBedrooms}
                    numberOfBathrooms={property.numOfBathrooms}
                    location={property.location}
                    area={property.area}
                />
            }
        }
    );

    return listingsArr
}

function AllListings()
{
    const [properties, setProperties] = useState(propertyList)
    
    const listings = MakeListingsCards(properties, false);
    console.log(listings)

    return (
        <div className='AllListings--container'>
            {/* <h1>Available Listings</h1> */}
            {listings}
        </div>
    );
}

function FeaturedListings()
{
    const [properties, setProperties] = useState(propertyList)

    const featuredListings = MakeListingsCards(properties, true);

    return (
        <div className='Featuredlistings--container'>
            <h1>Featured Listings</h1>
            <div>
                {featuredListings}
            </div>
        </div>
    );
}

export {FeaturedListings, AllListings};