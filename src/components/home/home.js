import React from 'react';

import Images from './images';

const Home = ({ imagesArray }) => {
    return ( 
        <div className='container__images'>
            {imagesArray.map(image => {
                return <Images key={image.id} imageData={image}/>;
                })
            }
        </div>
     );
};
 
export default Home;
