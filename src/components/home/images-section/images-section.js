import React from 'react';
import PropTypes from 'prop-types';
import './images-section.scss';

import Image from './image';

const ImagesSection = ({ imagesArray }) => {
    return ( 
        <section className='images-section'>
            <div className='container'>
                <div className='images-section__container'>
                    {imagesArray.map(image => {
                        return <Image key={image.id} imageData={image}/>;
                        })
                    }
                </div>
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
