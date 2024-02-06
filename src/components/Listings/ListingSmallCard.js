import React from "react";
import './Listings.css'
import proceedIcon from "../../images/angle-circle-right-icon.png"

function ListingSmallCard(props)
{
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    const formattedPrice = formatter.format(props.price)

    return (
        <button className="Listingcard--container">
            <img 
                className='Listingcard--img' 
                src={props.image}
            ></img>
            <div className="Listingcard--background">
                <div className="Listingcard--infoContainer">
                    <h2 className="Listingcard--price">{formattedPrice}</h2>
                    <p className="Listingcard--propertyInfo">
                        {props.listingType} - {props.numberOfBedrooms} bds, {props.numberOfBathrooms} ba, {props.area} sqm
                    </p>
                    <p className="Listingcard--location">{props.location}</p>
                </div>
                <img className="Listingcard--proceed" src={proceedIcon}></img>
            </div>
        </button>  
    );
}

export default ListingSmallCard