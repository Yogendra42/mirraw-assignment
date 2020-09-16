import React from 'react';

const Brand = ({brand}) => {
    return(
        <div className="brand" ><img src={brand} alt="brandlogo" className="brandimg" /></div>
    )
}

export default Brand;