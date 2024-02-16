import React, { useState } from "react";
import propertyList from '../properties_temp.json';
import ListingSmallCard from "./ListingSmallCard";
import ListingFilters from "../../ListingFilters/ListingFilters";

import "../FullScreenListings/ListingBig.css"
import "./SmallListingStyles.css"
import ListingBig from "../FullScreenListings/ListingBig";


function AllListings() //small cards
{
    const [selectedListing, setSelectedListing] = useState(null);
  
    const handleOpenBigListing = (listing) => {
      setSelectedListing(listing);
    };
  
    const handleCloseBigListing = () => {
      setSelectedListing(null);
    };
  

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

    const listings = filteredProperties.map((property) => 
        {
          return <ListingSmallCard 
              propid={property.id}
              image={property.photos[0]}
              price={property.price}
              listingType={property.propertyType}
              numberOfBedrooms={property.numOfBedrooms}
              numberOfBathrooms={property.numOfBathrooms}
              location={property.location}
              area={property.area}

              handleOpenBigListing={handleOpenBigListing}
          />   
        }
    );

    return (
        <div className='AllListings--container'>
            {selectedListing && 
              <div>
                <ListingBig 
                  property={properties[selectedListing]}
                  handleCloseBigListing={handleCloseBigListing}
                />
                <div id="ListingBig--background"></div>
              </div>
            }
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
        </div>
    );
}


export default AllListings;