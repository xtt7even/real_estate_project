export default function GetFilteredListings(properties, listingType, priceMin, priceMax, areaMin, areaMax, bedrooms, bathrooms, condition) {
  let filteredProperties = properties.filter(property => {
      if (listingType && property.listingType !== listingType) {
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
      if (bathrooms && property.numOfBathrooms < bathrooms) {
        return false; 
      }
      if (condition && property.condition !== condition) {
        return false; 
      }
      
      return true;
  });

  return filteredProperties;
}