import React, { useState } from "react";
import './ListingFilters.css'
import SimpleDropdown from "../Selectors/SimpleDropdown";
import MinMaxDropdown from "../Selectors/MinMaxDropdown"

function ListingFilters(props) {
    // window.onscroll = function() {isScrolledDown()};    

    // let className = 'Filters--container';
    const [className, setClassName] = useState("Filters--container");


    function ResetFilters() {
        var options = document.querySelectorAll('option');
        for (let index = 0; index < options.length; index++) {
            options[index].selected = options[index].defaultSelected;
        }

        props.setPropertyType(undefined);
        props.setPriceMin(undefined);
        props.setPriceMax(undefined);
        props.setAreaMin(undefined);
        props.setAreaMax(undefined)
        props.setBedrooms(undefined)
        props.setBathrooms(undefined)
        props.setCondition(undefined)
    }


    function scrolledDown() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            setClassName("Filters--container--stick");
        }
        else if (document.documentElement.scrollTop < 90) {
            setClassName("Filters--container")
        }
    }

    window.onscroll = () => scrolledDown()

    return (
        <div className={className}>
            <SimpleDropdown filter={props.propertyType} setFilter={props.setPropertyType} filterTitle="Property Type" options={["House", "Apartment", "Villa", "Other"]} placeholder="Select Property Type" />
            <MinMaxDropdown filterMin={props.priceMin} filterMax={props.priceMax} setMin={props.setPriceMin} setMax={props.setPriceMax} filterTitle="Price" range={[0, 10000000]} divider={10000} description="€" />
            <MinMaxDropdown filterMin={props.areaMin} filterMax={props.areaMax} setMin={props.setAreaMin} setMax={props.setAreaMax} filterTitle="Area/Size" range={[0, 2000]} divider={10} description="sqm" />
            <SimpleDropdown filter={props.bedrooms} setFilter={props.setBedrooms} filterTitle="Amount Of Bedrooms" options={[1, 2, 3, 4, 5]} placeholder="Select Number" moreThanValue={true} />
            <SimpleDropdown filter={props.bathrooms}  setFilter={props.setBathrooms} filterTitle="Amount Of Bathrooms" options={[1, 2, 3, 4, 5]} placeholder="Select Number" moreThanValue={true} />
            <SimpleDropdown filter={props.condition} setFilter={props.setCondition} filterTitle="Condition" options={["New", "Good Condition", "To Be Repaired"]} placeholder="Select Condition" moreThanValue={false} />
            
            <div className="Filter--buttons--container">
                <button onClick={ResetFilters} className="Filters--btn">Reset Filters</button>
            </div>
        </div>
    );
}

export default ListingFilters;