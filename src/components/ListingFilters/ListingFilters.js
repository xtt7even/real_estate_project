import React, { useState } from "react";
import './ListingFilters.css'
import SimpleDropdown from "../Selectors/SimpleDropdown";
import MinMaxDropdown from "../Selectors/MinMaxDropdown"

function ListingFilters() {
    // window.onscroll = function() {isScrolledDown()};    

    // let className = 'Filters--container';
    const [className, setClassName] = useState("Filters--container");

    const [propertyType, setPropertyType] = useState();
    const [priceMin, setPriceMin] = useState();
    const [priceMax, setPriceMax] = useState();
    const [areaMin, setAreaMin] = useState();
    const [areaMax, setAreaMax] = useState();
    const [bedrooms, setBedrooms] = useState();
    const [bathrooms, setBathrooms] = useState();
    const [condtion, setCondition] = useState();



    function setFiltersOnChange(selectElement, filter) {
        // setFilters(
        //     () => {
        //         // console.log(Object.keys(filters));
        //         const updatedValue = {};
        //         // for (let index = 0; index < filters.length; index++) {
        //         //     if (Object.keys(filters)[index] == filter)
        //         //     {

        //         //     }
        //         // }
        //         console.log(selectElement.options[selectElement.selectedIndex]);
        //         // updatedValue[filter] = selectElement.options[selectElement.selectedIndex].value;
        //         console.log(updatedValue);
        //         return {...filters, ...updatedValue}; 

        //     }            
        // );
        // console.log(filters);
    }

    function ResetFilters() {
        var options = document.querySelectorAll('option');
        for (let index = 0; index < options.length; index++) {
            options[index].selected = options[index].defaultSelected;
        }

        setPropertyType(undefined);
        setPriceMin(undefined);
        setPriceMax(undefined);
        setAreaMin(undefined);
        setAreaMax(undefined)
        setBedrooms(undefined)
        setBathrooms(undefined)
        setCondition(undefined)
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
            <SimpleDropdown setFilter={setPropertyType} filterTitle="Property Type" options={["House", "Apartaments", "Villa", "Other"]} placeholder="Select Property Type" />
            <MinMaxDropdown setMin={setPriceMin} setMax={setPriceMax} filterTitle="Price" range={[0, 10000000]} divider={10000} description="€" />
            <MinMaxDropdown setMin={setAreaMin} setMax={setAreaMax} filterTitle="Area/Size" range={[0, 2000]} divider={10} description="sqm" />
            <SimpleDropdown setFilter={setBedrooms} filterTitle="Amount Of Bedrooms" options={[1, 2, 3, 4, 5]} placeholder="Select Number" moreThanValue={true} />
            <SimpleDropdown setFilter={setBathrooms} filterTitle="Amount Of Bathrooms" options={[1, 2, 3, 4, 5]} placeholder="Select Number" moreThanValue={true} />
            <SimpleDropdown setFilter={setCondition} filterTitle="Condition" options={["New", "Good Condition", "To Be Repaired"]} placeholder="Select Condition" moreThanValue={false} />
            <div className="Filter--buttons--container">
                <button onClick={ResetFilters} className="Filters--btn">Reset Filters</button>
                <button onClick={() => console.log([propertyType, priceMin, priceMax, areaMin, areaMax, bedrooms, bathrooms, condtion])} className="Filters--btn">Foo</button>
            </div>
        </div>
    );
}

export default ListingFilters;