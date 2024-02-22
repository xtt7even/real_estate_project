import React from "react";
import "./ListingBig.css"

import mapPin from "../../../images/icons/maps-pin.png"
import homeIcon from "../../../images/icons/home-icon.png"
import rulerIcon from "../../../images/icons/ruler-icon.png"
import bathroomIcon from "../../../images/icons/sink-wash-basin-icon.png"
import bedroomIcon from "../../../images/icons/sleep-icon.png"
import fileIcon from "../../../images/icons/file-black-icon.png"

import photoChangeArrow from "../../../images/icons/thin-chevron-round-left-icon.png"

import closeIcon from "../../../images/icons/close-line-icon.png"

function ListingBig(props)
{
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    const formattedPrice = formatter.format(props.property.price)

    return (
        <div id="ListingBig--container--background">
            <div id="ListingBig--container">
                <button onClick={() => props.handleCloseBigListing()} id="ListingBig--closebtn">
                    <img src={closeIcon}></img>
                </button>
                <div id="ListingBig--photocontainer">
                            <div className="ListingBig--photo--shadows" id="left">
                                <img src={photoChangeArrow}></img>
                            </div>
                            <img id="ListingBig--activephoto" src={props.property.photos[0]}></img> {/* hardcoded for now, should be dynamic */}
                            <div className="ListingBig--photo--shadows" id="right">
                                <img src={photoChangeArrow}></img>
                            </div>
                    
                </div>

                <div id="ListingBig--info--container">
                    <h4 id='ListingBig--title'>{props.property.propertyType + " in " + props.property.location}</h4>
                    <h3 id='ListingBig--price'>{formattedPrice}</h3>
                    
                    <div id="ListingBig--features--container">
                        <div className="ListingBig--featurebox">
                            <img src={mapPin}></img>
                            <div className="Feature--content">
                                <p>{props.property.location}</p>
                            </div>
                        </div>
                        <div className="ListingBig--featurebox">
                            <img src={bedroomIcon}></img>
                            <div className="Feature--content">
                                <p>Bedrooms: {props.property.numOfBedrooms}</p>
                            </div>
                        </div>
                        <div className="ListingBig--featurebox">
                            <img src={bathroomIcon}></img>
                            <div className="Feature--content">
                                <p>Bathrooms: {props.property.numOfBathrooms}</p>
                            </div>
                        </div>
                        <div className="ListingBig--featurebox">
                            <img src={rulerIcon}></img>
                            <div className="Feature--content">
                                <p>Area: {props.property.area}sqm</p>
                            </div>
                        </div>
                        <div className="ListingBig--featurebox">
                            <img src={fileIcon}></img>
                            <div className="Feature--content">
                                <p>Condition: {props.property.condition}</p>
                            </div>
                        </div>
                        <div className="ListingBig--featurebox">
                            <img src={homeIcon}></img>
                            <div className="Feature--content">
                                <p>Property Type: {props.property.propertyType}</p>
                            </div>
                        </div>
                    </div>


                    <div id="ListingBig--desription--container">
                        <h4>Desription</h4>
                        <p>
                            {props.property.description}
                        </p>
                    </div>
                </div>

                
                <div id="ListingBig--form--container">
                    <h4>Interested in this property? Contact Us!</h4>
                    <div id="ListingBig--form--background">
                        <form>
                            <input type="text" className="Form--input--small" placeholder="Full Name" name="name"></input>
                            <input type="text" className="Form--input--small" placeholder="E-Mail" name="email"></input>
                            <input type="text" className="Form--input--small" placeholder="Phone Number" name="phonenumber"></input>
                            <input type="text" className="Form--input--big" placeholder="Message" name="message"></input>
                            <button id="Form--sendbtn">Send</button>
                        </form>
                    </div>

                    
                </div>
                
            </div>
        </div>
    );
}

export default ListingBig;