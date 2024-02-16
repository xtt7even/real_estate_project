import React from "react";
import "./ListingBig.css"

function ListingBig(props)
{
    return (
        <div id="ListingBig--container">
            <div id="ListingBig--photocontainer">
                {/* <img src=></img> */}
            </div>

            <div id="ListingBig--info--container">
                <h4 id='ListingBig--title'>{props.propertyType + " in " + props.location}</h4>
                <h3 id='ListingBig--price'>{props.price}</h3>
                
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
                        {props.desription}
                    </p>
                </div>
            </div>

            <div id="ListingBig--form--container">
                <form>
                    <input type="text" className="Form--input--small" name="name"></input>
                    <input type="text" className="Form--input--small" name="email"></input>
                    <input type="text" className="Form--input--small" name="phonenumber"></input>
                    <input type="text" className="Form--input--big" name="message"></input>
                </form>
            </div>
            <div id="ListingBig--background"></div>
        </div>
    );
}

export default ListingBig;