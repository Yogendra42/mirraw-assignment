import React from 'react';
import Slide from './Slide.js';
import Spotlight from './Spotlight';
const Main = () => {
    return(
        <div className="main">
            <Slide />  {/* easy to share code  and reusable at other pages*/}
            <Spotlight />
        </div>
    )
}

export default Main;