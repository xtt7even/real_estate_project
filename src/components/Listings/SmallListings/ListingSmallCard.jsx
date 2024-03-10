import React from "react";
import './SmallListingStyles.css'
import proceedIcon from "../../../images/angle-circle-right-icon.png"

function ListingSmallCard(props)
{  
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    const formattedPrice = formatter.format(props.price)

    const handleCardClick = () => { 
        props.handleOpenBigListing(props.propid)
        document.documentElement.style.overflow = 'hidden';
    }

    return (
            <button onClick={handleCardClick} className={props.isDesktop ? 'Listingcard--container' : "Listingcard--container--mobile"}>
                <img 
                    className='Listingcard--img' 
                    src={"http://localhost:8080/static/" + props.image}
                    onError = {(e) => {e.target.src = "/nophotos_placeholder.jpg"}}
                ></img>
                <div className="Listingcard--background">
                    <div className={props.isDesktop ? "Listingcard--infoContainer" : "Listingcard--infoContainer--mobile"}>
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