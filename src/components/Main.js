import React from 'react';
import Slide from './Slide.js';
import Spotlight from './Spotlight';
const Main = () => {
    return(
        <div className="main">
            <Slide />  {/* single responsibility principle and reusable at other pages and no changes no rerender*/}
            <Spotlight />
        </div>
    )
}

export default Main;