import React from 'react';
import Banner from './Banner';
import TopHeader from './TopHeader';
const Header = () => {
    return(
        <header className="header">
        <Banner />
        <TopHeader />
        </header>
    )
}

export default Header;