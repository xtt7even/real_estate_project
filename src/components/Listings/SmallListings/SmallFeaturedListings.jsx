import {React , useState} from "react";
import ListingSmallCard from "./ListingSmallCard";
import propertyList from '../properties_temp.json';

import ListingBig from "../FullScreenListings/ListingBig";
import "../FullScreenListings/ListingBig.css"

function FeaturedListings()
{
    const [properties, setProperties] = useState(propertyList)
    const [selectedListing, setSelectedListing] = useState(null);
  
    const handleOpenBigListing = (listing) => {
      setSelectedListing(listing);
    };
  
    const handleCloseBigListing = () => {
      setSelectedListing(null);
      document.documentElement.style.overflow = 'scroll';
      // document.body.scroll = "none";
    };

    let i = 0;
    const featuredListings = properties.map((property) => 
    {
        if (i < 3)
        {
            i++;
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
      
    }
);

    return (
        <div className='Featuredlistings--container'>
            {selectedListing && 
              <div id="ListingBig">
                <ListingBig 
                  property={properties[selectedListing-1]}
                  handleCloseBigListing={handleCloseBigListing}
                />
                <div id="ListingBig--background"></div>
              </div>
            }
            <h1>Featured Listings</h1>
            <div>
                {featuredListings}
            </div>
            
        </div>
    );
}

export default FeaturedListings;