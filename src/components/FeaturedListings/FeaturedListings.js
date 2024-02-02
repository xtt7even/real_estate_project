import React, { useState } from "react";
import propertyList from './properties_temp.json';
import ListingSmallCard from "./ListingSmallCard";

//Using local template JSON for now, as there is no API

function FeaturedListings()
{
    const [properties, setProperties] = useState(propertyList)

    const FeaturedListingsArr = properties.map((property) => 
        {
            if (property.id < 4) //temporary because hardcoded for now, should pick random listings everytime
            {
                return <ListingSmallCard 
                    // propertyType={property.propertyType}
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

    return (
        <div className='Featuredlistings--container'>
            <h1>Featured Listings</h1>
            <div>
                {FeaturedListingsArr}
            </div>
        </div>
    );
}

export default FeaturedListings;