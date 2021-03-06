import React from 'react';
import Brand from './Brand';
import spot1 from '../images/spot1.png';
import spot2 from '../images/spot2.png';
import spot3 from '../images/spot3.png';
import spot4 from '../images/spot4.png';
import spot5 from '../images/spot5.png';
import spot6 from '../images/spot6.png';

const  brands = [spot1, spot2, spot3, spot4, spot5, spot6];
const Spotlight = () => {
    return(
        <div className="spotlight">
            <div className="sptlgt">
                In The Spotlight
            </div>
            {/* single responsibility principle and  ui design similar so component can be reused  */}
            {brands.map((brand) => <Brand brand={brand} /> )} 
        </div>
    )
}

export default Spotlight;