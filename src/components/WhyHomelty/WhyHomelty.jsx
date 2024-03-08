import React, { cloneElement } from "react";
import checkMark from "../../images/check_icon.png"
import benefitsPhoto from "../../images/business_woman_ai.jpg"
import "./WhyHomelty.css"

function WhyHomelty(props)
{
    return(
        <div className="Whyhomelty--container">
            <div id="Whyhomelty--cropper">
                <div className="Benefits--list">
                    <h2>Why Homelty?</h2>
                    <div className="Benefit--container">
                    {props.isDesktop && <img src={checkMark} className="Checkmark--img"></img>}
                        <p><b>Experience</b>: Benefit from our years of experience in the real estate industry, ensuring you receive expert guidance and support throughout your journey.</p>
                    </div>
                    <div className="Benefit--container">
                        {props.isDesktop && <img src={checkMark} className="Checkmark--img"></img>}
                        <p><b>Local Expertise</b>: Rely on our deep understanding of the local market and neighborhoods, giving you an insider's perspective and helping you make informed decisions.</p>
                    </div>
                    <div className="Benefit--container">
                        {props.isDesktop && <img src={checkMark} className="Checkmark--img"></img>}
                        <p><b>Personalized Service</b>: Enjoy personalized attention and tailored solutions designed to meet your unique needs and preferences, making your real estate experience seamless and stress-free.</p>
                    </div>
                </div>
                {props.isDesktop && 
                    <div className="Benefits--photo--container">
                        <img className="Benefits--photo" src={benefitsPhoto}></img>
                    </div>
                }
            </div>
        </div>
    );
}

export default WhyHomelty