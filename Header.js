import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img*/}
            <Link to="/">
                {/* <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img> */}
                <img className="header__logo" src = "../utrack.png"></img>
            </Link>

            <Link to="/" className="header_link">
                <div className="header__optionProgram">
                {/* <span className="header__option1">Return</span> */}
                <span className="header__option2Program">Program</span>
                <ExpandMoreIcon className="header__arrowIcon"/>
                </div>
                </Link>
            
            {/* search-box */}
            <div className="header__search">
            <input type="text" className="header__searchInput" placeholder=" Search for anything"></input>
            <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="headerNav">
                {/* 1st link */}
                <Link to="/login" className="header_link">
                <div className="header__option">
                {/* <span className="header__option1">Hello Ratnadeep</span> */}
                <span className="header__option1"> Log in</span>
                </div>
                </Link>

                {/* 2nd link */}
                {/* <Link to="/" className="header_link">
                <div className="header__option"> */}
                {/* <span className="header__option1">Return</span> */}
                {/* <span className="header__option2">Program</span> */}
                {/* </div>
                </Link> */}
                <Link to="/" className="header_link">
                <div className="header__option">
                <span className="header__option2"> | </span>
                </div>
                </Link>

                {/*3rd link */}
                 <Link to="/" className="header_link">
                <div className="header__option">
                {/* <span className="header__option1">Your</span> */}
                <span className="header__option3">Sign up</span>
                </div>
                </Link>
            </div>

            {/* Basket icon with number */}
            <Link to="/checkout" className="header_link">
                <div className="header__optionBasket">
                    {/* Shopping Basket Icon */}
                    {/* <ShoppingBasketIcon /> */}
                    <AddShoppingCartIcon />
                    {/* Number of Items in the Basket */}
                    <spna className=".header__option2 header__basketCount">0</spna>
                </div>
            </Link>
        </nav>
        // 
    )
}

export default Header
