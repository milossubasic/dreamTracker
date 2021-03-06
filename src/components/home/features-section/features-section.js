import React from 'react';
import PropTypes from 'prop-types';

import Feature from './feature';

const FeaturesSection = ({ heading, features }) => {
    return (
        <section>
            <div className='container centering'>
                <h3>{heading}</h3>
                <ul>
                    {features.map( feature => {
                        return <Feature key={feature.id} featureData={feature} />;
                    })}
                </ul>
            </div>
        </section> 

    );
};

FeaturesSection.propTypes = {
    heading: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            feature: PropTypes.string.isRequired
        })
    )
};
 
export default FeaturesSection;
