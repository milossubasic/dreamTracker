import React from 'react';
import PropTypes from 'prop-types';
import './images-section.scss';

import Image from './image';

const ImagesSection = ({ imagesArray }) => {
    return ( 
        <section>
            <div className='container container__images'>
                {imagesArray.map(image => {
                    return <Image key={image.id} imageData={image}/>;
                    })
                }
            </div>
        </section>
     );
};
 
ImagesSection.propTypes = {
    imagesArray: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            photo: PropTypes.any.isRequired,
            link: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired
        })

    )
};

export default ImagesSection;
