import {React , useState} from "react";
import ListingSmallCard from "./ListingSmallCard";
import propertyList from '../properties_temp.json';


function FeaturedListings()
{
    const [properties, setProperties] = useState(propertyList)

    let i = 0;
    const featuredListings = properties.map((property) => 
    {
        if (i < 3)
        {
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

    return (
        <div className='Featuredlistings--container'>
            <h1>Featured Listings</h1>
            <div>
                {featuredListings}
            </div>
            
        </div>
    );
}

export default FeaturedListings;