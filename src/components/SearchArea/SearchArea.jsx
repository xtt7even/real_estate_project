import React from "react";
import './SearchArea.css'
import photo from '../../images/mainpage_photo.jpg'
import searchIcon from '../../images/search-line-icon.png'

export default function SearchArea()
{
    return(
        <div className="Searcharea--container">


            <div className="Photo--crop">
                <img className="Searcharea--photo" src={photo}></img>
                <div className="Searcharea--area">
                    <div className="Searcharea--slogan"><h2>Homelty, where dreams find their address. </h2></div>
                    <div className="Searcharea--searchbar">
                        <form>
                            <input className="Searcharea--input" placeholder="Country, City or a ZIP Code" type="text" id="search"></input>
                        </form>
                        <button className="Searcharea--search--btn">
                            <img className="Searcharea--searchicon--img"src={searchIcon}></img>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}