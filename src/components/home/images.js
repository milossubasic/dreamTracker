import React from 'react';
import PropTypes from 'prop-types';

const Images = ({ imageData }) => {

    const {photo, altText} = imageData;
    return ( 
        <img src={photo} alt={altText}/>
     );
};

Images.propTypes = {
    imageData: PropTypes.shape({
        photo: PropTypes.any.isRequired,
        altText: PropTypes.string.isRequired
    })
};
 
export default Images;
