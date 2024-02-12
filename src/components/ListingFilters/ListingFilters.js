import React, {useState} from "react";
import './ListingFilters.css'
import SimpleDropdown from "../Selectors/SimpleDropdown";
import MinMaxDropdown from "../Selectors/MinMaxDropdown"

function ListingFilters()
{
    // window.onscroll = function() {isScrolledDown()};    

    // let className = 'Filters--container';
    const [className, setClassName] = useState("Filters--container");

    function scrolledDown() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) 
        {
            setClassName("Filters--container--stick");
        } 
        else if (document.documentElement.scrollTop < 90)
        {
            setClassName("Filters--container")
        }
    }

    window.onscroll= () => scrolledDown()
    
    return (
        <div className={className}>
            <SimpleDropdown filterTitle="Property Type" options={["House", "Apartaments", "Villa", "Other"]} placeholder="Select Property Type"/>
            <MinMaxDropdown filterTitle="Property Type" range={[0, 10000000]} divider={10000} description="€"/>
            <MinMaxDropdown filterTitle="Area/Size" range={[0, 2000]} divider={10} description="sqm"/> 
            <SimpleDropdown filterTitle="Amount Of Bedrooms" options={[1, 2, 3, 4, 5]} placeholder="Select Number" moreThanValue={true}/>
            <SimpleDropdown filterTitle="Amount Of Bathrooms" options={[1, 2, 3, 4, 5]} placeholder="Select Number" moreThanValue={true}/>
            <SimpleDropdown filterTitle="Condition" options={["New", "Good Condition", "To Be Repaired"]} placeholder="Select Condition" moreThanValue={false}/>
            <div className="Filter--buttons--container">
                <button className="Filters--btn">Reset Filters</button>
                <button className="Filters--btn">Apply Filters</button>
            </div>
        </div>
    );
}

export default ListingFilters;