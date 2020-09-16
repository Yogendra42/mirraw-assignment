import React from 'react';
import Banner from './Banner';
import TopHeader from './TopHeader';
const Header = () => {
    return(
        <header className="header">
        <Banner />    {/*  reusable and  single responsibility principle */}
        <TopHeader /> {/* single responsibility principle */}
        </header>
    )
}

export default Header;