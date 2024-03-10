import {React , useState, useEffect} from "react";
import ListingSmallCard from "./ListingSmallCard";

import ListingBig from "../FullScreenListings/ListingBig";
import "../FullScreenListings/ListingBig.css"

function FeaturedListings(props)
{
    const [properties, setProperties] = useState(null)
    const [selectedListing, setSelectedListing] = useState(null);
  
    const handleOpenBigListing = (listing) => {
      setSelectedListing(listing);
    };
  
    const handleCloseBigListing = () => {
      setSelectedListing(null);
      document.documentElement.style.overflow = 'scroll';
    };

    useEffect(() => {
      fetch("/get_properties")
      .then(response => response.json())
      .then(data => {
        setProperties(data)
      })
    }, [])

    if (properties == null) {
      return null
    }
    else {
      let i = 0;
      const featuredListings = properties.map((property) => 
        {
            if (i < 3)
            {
                i++;
                return <ListingSmallCard 
                    propid={property.listingid}
                    image={property.photos[0]}
                    price={property.price}
                    listingType={property.listingType}
                    numberOfBedrooms={property.numOfBedrooms}
                    numberOfBathrooms={property.numOfBathrooms}
                    location={property.location}
                    area={property.area}

                    isDesktop={props.isDesktop}

                    handleOpenBigListing={handleOpenBigListing}
                />   
            }
          
        }
      );
      


      return (
          <div className='Featured--module' id={props.isDesktop ? '' : 'Featured--module--mobile'}>
              {selectedListing && 
                <div id="ListingBig">
                  <ListingBig 
                    property={properties[selectedListing-1]}
                    handleCloseBigListing={handleCloseBigListing}
                  />
                  <div id={props.isDesktop ? "ListingBig--background" : "ListingBig--background--mobile"} ></div>
                </div>
              }
              <h1>Featured Listings</h1>
              <div id={props.isDesktop ? 'Featured--container' : 'Featured--container--mobile'}>
                  {featuredListings}
              </div>
              
          </div>
      );
  }
}

export default FeaturedListings;