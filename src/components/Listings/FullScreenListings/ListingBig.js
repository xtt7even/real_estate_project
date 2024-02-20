import React from "react";
import "./ListingBig.css"

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
                <button onClick={() => props.handleCloseBigListing()}>Close</button>
                <div id="ListingBig--photocontainer">
                            <div className="ListingBig--photo--shadows" id="left">
                            
                            </div>
                            <img id="ListingBig--activephoto" src={props.property.photos[0]}></img> {/* hardcoded for now, should be dynamic */}
                            <div className="ListingBig--photo--shadows" id="right">
        
                            </div>
                    
                </div>

                <div id="ListingBig--info--container">
                    <h4 id='ListingBig--title'>{props.property.propertyType + " in " + props.property.location}</h4>
                    <h3 id='ListingBig--price'>{formattedPrice}</h3>
                    
                    <div id="ListingBig--features--container">
                        <div className="ListingBig--featurebox"></div>
                        <div className="ListingBig--featurebox"></div>
                        <div className="ListingBig--featurebox"></div>
                        <div className="ListingBig--featurebox"></div>
                        <div className="ListingBig--featurebox"></div>
                        <div className="ListingBig--featurebox"></div>
                    </div>

                    <div id="ListingBig--desription--container">
                        <h4>Desription</h4>
                        <p>
                            {props.property.description}
                        </p>
                    </div>
                </div>

                {/* <h4>Interested in this property? Contact Us!</h4> */}
                <div id="ListingBig--form--container">
                    
                    <form>
                        <input type="text" className="Form--input--small" placeholder="Full Name" name="name"></input>
                        <input type="text" className="Form--input--small" placeholder="E-Mail" name="email"></input>
                        <input type="text" className="Form--input--small" placeholder="Phone Number" name="phonenumber"></input>
                        <input type="text" className="Form--input--big" placeholder="Message" name="message"></input>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default ListingBig;