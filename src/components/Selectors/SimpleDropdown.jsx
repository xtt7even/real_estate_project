import React from "react";
import './Dropdown.css'
import dropdownArrow from "../../images/line-angle-down-icon.png"

function SimpleDropdown(props)
{
    const dropdownOptions = [
        <option className="Dropdown--option--placeholder" value="none" hidden>{props.placeholder}</option>
    ]; 

    dropdownOptions.push(props.options.map((option) => 
        <option className="Dropdown--option" value={option}>
            {option + " " + (props.moreThanValue ? "or more" : "")}
        </option>
    ));

    return (
        <div key={props.id}>
            <h3 className="Filter--title">{props.filterTitle}</h3>
            <div className="Dropdown--select--container">
                <div className="dropdown">
                    <select onChange={(e) => props.setFilter(e.target.value)} className="Dropdown--select">
                        {dropdownOptions}
                    </select>
                </div>
                <img className="Dropdown--arrow-img" src={dropdownArrow}></img>
            </div>
        </div>
    );
}

export default SimpleDropdown