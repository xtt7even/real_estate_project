import React from "react";
import './Dropdown.css'
import dropdownArrow from "../../images/line-angle-down-icon.png"

function SimpleDropdown(props)
{   
    let values = [];
    let divider = props.divider

    for (let index = props.range[0], iter = 0; index < props.range[1]; index += divider, iter++) {
        values.push(index);
        
        if (iter >= 10) {
            divider *= 10;
            iter = 1;
        }
    }

    const dropdownOptionsMax = [
        <option className="Dropdown--option--placeholder" value="none" selected hidden>Max</option>
    ];

    const dropdownOptionsMin = [
        <option className="Dropdown--option--placeholder" value="none" selected hidden>Min</option>
    ];

    dropdownOptionsMax.push(values.map((option) => 
        <option className="Dropdown--option" value={option}>{option + " " + props.description}</option>
    ));

    dropdownOptionsMin.push(values.map((option) => 
    <option className="Dropdown--option" value={option}>{option + " " + props.description}</option>
));

    return (
        <div>
            <h3 className="Filter--title">{props.filterTitle}</h3>
            <div className="Dropdown--minmax--container">
                <div className="Dropdown--select--container--minmax">
                    <div>
                        <select onChange={(e) => props.setMin(e.target.value)} className="Dropdown--select--minmax">
                            {dropdownOptionsMin}
                        </select>
                    </div>
                    <img className="Dropdown--arrow-img--minmax" src={dropdownArrow}></img>
                </div>
                <div className="Dropdown--select--container--minmax">
                    <div>
                        <select onChange={(e) => props.setMax(e.target.value)} className="Dropdown--select--minmax">
                            {dropdownOptionsMax}
                        </select>
                    </div>
                    <img className="Dropdown--arrow-img--minmax" src={dropdownArrow}></img>
                </div>
            </div>
        </div>
    );
}

export default SimpleDropdown