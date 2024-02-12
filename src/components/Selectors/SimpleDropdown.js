import React from "react";
import './Dropdown.css'
import dropdownArrow from "../../images/line-angle-down-icon.png"
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";

function SimpleDropdown(props)
{
    const dropdownOptions = [
        <option className="Dropdown--option--placeholder" value="none" disabled selected hidden>{props.placeholder}</option>
    ];

    dropdownOptions.push(props.options.map((option) => 
        <option className="Dropdown--option" value={option}>
            {option + " " + (props.moreThanValue ? "or more" : "")}
        </option>
    ));

    // dropdownOptions.push()
    // let styles = {textColor: "red",};

    
    // function changeStyle(e)
    // {
    //     styles = e.target.value == "none" ? {textColor: "gray"} : {textColor: "black"}
    // }

    return (
        <div>
            <h3 className="Filter--title">{props.filterTitle}</h3>
            <div className="Dropdown--select--container">
                <div className="dropdown">
                    <select className="Dropdown--select">
                        {dropdownOptions}
                    </select>
                </div>
                <img className="Dropdown--arrow-img" src={dropdownArrow}></img>
            </div>
        </div>
    );
}

export default SimpleDropdown