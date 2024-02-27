import React, { useEffect, useState } from "react";
import ListingFilters from "../../ListingFilters/ListingFilters";
import GetFilteredListings from "./GetFilteredListings"
import ListingSmallCard from "./ListingSmallCard";

import "../FullScreenListings/ListingBig.css"
import "./SmallListingStyles.css"
import ListingBig from "../FullScreenListings/ListingBig";

// This component is the parent component, responsible for rendering the list of all listings
// on the /listings page (filtered or unfiltered)
// it has 3 child components: 
//    1. ListingFilters - filters component, a filter container on the left of the screen 
//       where user select the filter parameters
//    2. ListingSmallCard - a single listing card for a property.
//    3. ListingBig - an overlay component which is visible only when ListingSmallCard is clicked

// GetFilteredListing is a library, that contains a function that recieves a properties list, and all the filters 
// (selected in the <ListingFilters /> component), this function returns an array of filtered items, which then are being 
// mapped into different <ListingSmallCard />s components.  

function AllListings()
{
    const [selectedListing, setSelectedListing] = useState(null);
  
    //passing that to the small card, to call on click event
    const handleOpenBigListing = (listing) => {
      setSelectedListing(listing);
    };
  
    //passing that to the big listing, to call on close-btn click event
    const handleCloseBigListing = () => {
      setSelectedListing(null);
      document.documentElement.style.overflow = 'scroll';
    };

    //fetching properties data from a nodejs server
    useEffect(() => { 
      fetch("/get_properties")
      .then(response => response.json())
      .then(data => {
        setProperties(data)
        //console.log(`data: ${data}`)
      })
    }, [])

    //properties state to display store properties, and then pass it for filtering
    const [properties, setProperties] = useState(null)

    //filters states, we're passing them to the <ListingFilters/> component, to change them based on filter selection
    const [propertyType, setPropertyType] = useState();
    const [priceMin, setPriceMin] = useState();
    const [priceMax, setPriceMax] = useState();
    const [areaMin, setAreaMin] = useState();
    const [areaMax, setAreaMax] = useState();
    const [bedrooms, setBedrooms] = useState();
    const [bathrooms, setBathrooms] = useState();
    const [condition, setCondition] = useState();

    //if properties has not yet been fetched - we won't render and filter anything
    if (properties != null) {
      const filteredListings = GetFilteredListings(
        properties,
        propertyType,
        priceMin,
        priceMax,
        areaMin, 
        areaMax,
        bedrooms,
        bathrooms,
        condition,
        handleOpenBigListing
      );

      const listings = filteredListings.map((property) => {
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
                <div id="ListingBig">
                  <ListingBig 
                    property={properties[selectedListing-1]}
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
}


export default AllListings;