import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imageData }) => {

    const {id, photo, link, altText} = imageData;
    return ( 
        <a href={link}>
            <img 
                src={photo} 
                alt={altText}
                className={`container__image container__image--${id}`}/>
        </a>
     );
};

Image.propTypes = {
    imageData: PropTypes.shape({
            id: PropTypes.string.isRequired,
            photo: PropTypes.any.isRequired,
            link: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired
        })
};
 
export default Image;
