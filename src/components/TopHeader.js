import React from 'react';
import logo from '../images/logo.jpeg';
import shoppingbag from '../images/shopping-bag.png';
import {FaSearch, FaChevronDown} from 'react-icons/fa';
const name =[
    'What\'s New',
    'Brands',
    'Western Wear',
    'Indian Wear',
    'Bags',
    'Shoes',
    'Jewellery',
    'Lingerie',
    'Accessories',
    'Kids',
    'Men',
    'Luxe'
    ];

const TopHeader = () => {
    return(
        <div className="topheader">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div class="header-categories">
                <nav class="navbar">
                    {name.map((nametxt,index)=> <div class="navtitle" key={index}>{nametxt}</div>)} 
                </nav>  
                <ul class="header-actions">
                    <li class="action">
                        <FaSearch className="search-ico" />
                        <div className="action-txt">Search</div>
                    </li>
                    <li class="action action-margin">
                        <div>Sign In</div>
                        <div>
                            <FaChevronDown className="down-arrow" />
                        </div>
                    </li>
                    <li class="action action-margin">
                        <div>
                            <img src={shoppingbag} alt="bag" width="32px" />
                            <div class="ct-cart">0</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopHeader;