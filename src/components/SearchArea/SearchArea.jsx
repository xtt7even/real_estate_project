import React from "react";
import './SearchArea.css'
import photo from '../../images/mainpage_photo.jpg'
import searchIcon from '../../images/search-line-icon.png'

export default function SearchArea(props)
{
    const responsiveClass = {
        container: props.isDesktop ? 'Searcharea--container' : 'Searcharea--container--mobile',
        crop: props.isDesktop ? 'Photo--crop' : 'Photo--crop--mobile',
        searchArea: props.isDesktop ? 'Searcharea--area' : 'Searcharea--area--mobile',
        searchBar: props.isDesktop ? 'Searcharea--searchbar' : 'Searcharea--searchbar--mobile'
    }

    return(
        <div className={responsiveClass.container}>
            <div className={responsiveClass.crop}>
                <img className="Searcharea--photo" src={photo}></img>
                <div className={responsiveClass.searchArea}>
                    {props.isDesktop && <div className="Searcharea--slogan"><h2>Homelty, where dreams find their address. </h2></div>}
                    <div className="Searcharea--searchbar" id={responsiveClass.searchBar}>
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