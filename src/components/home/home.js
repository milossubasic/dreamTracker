import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';

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
 
Home.propTypes = {
    imagesArray: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            photo: PropTypes.any.isRequired,
            link: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired
        })

    )
};

export default Home;
