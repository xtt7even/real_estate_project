import React, { useEffect, useState } from "react";
import propertyList from './properties_temp.json';
import ListingSmallCard from "./ListingSmallCard";
import ListingFilters from "../ListingFilters/ListingFilters";

import "./Listings.css"

//Using local template JSON for now, as there is no API

function MakeListingsCards(properties, isFeatured)
{
    const cardAmount = isFeatured ? 3 : properties.length;
    // console.log(properties.length)
    // console.log(properties)
    let i = 0;
    const listingsArr = properties.map((property) => 
        {
            if (!isFeatured || (i < 3)) {
                i++;
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
    
    const [propertyType, setPropertyType] = useState();
    const [priceMin, setPriceMin] = useState();
    const [priceMax, setPriceMax] = useState();
    const [areaMin, setAreaMin] = useState();
    const [areaMax, setAreaMax] = useState();
    const [bedrooms, setBedrooms] = useState();
    const [bathrooms, setBathrooms] = useState();
    const [condition, setCondition] = useState();

    let filteredProperties = properties.filter(property => {
        if (propertyType && property.propertyType !== propertyType) {
          return false;
        }
        if (priceMin && property.price < priceMin) {
          return false;
        }
        if (priceMax && property.price > priceMax) {
          return false; 
        }
        if (areaMin && property.area < areaMin) {
          return false;
        }
        if (areaMax && property.area > areaMax) {
          return false;
        }
        if (bedrooms && property.numOfBedrooms < bedrooms) {
          return false; 
        }
        if (bathrooms && property.numberOfBathrooms < bathrooms) {
          return false; 
        }
        if (condition && property.condition !== condition) {
          return false; 
        }
        
        return true;
    });




    const listings = MakeListingsCards(filteredProperties, false);

    return (
        <div className='AllListings--container'>
            <ListingFilters
            
                setPropertyType={setPropertyType}
                setPriceMin={setPriceMin}
                setPriceMax={setPriceMax}
                setAreaMin={setAreaMin}
                setAreaMax={setAreaMax}
                setBedrooms={setBedrooms}
                setBathrooms={setBathrooms}
                setCondition={setCondition}

                propertyType={propertyType}
                priceMin={priceMin}
                priceMax={priceMax}
                areaMin={areaMin}
                areaMax={areaMax}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                condition={condition}
            />
            {listings}
            {/* <button onClick={() => console.log([propertyType, priceMin, priceMax, areaMin, areaMax, bedrooms, bathrooms, condition])} className="Filters--btn">Foo</button> */}
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