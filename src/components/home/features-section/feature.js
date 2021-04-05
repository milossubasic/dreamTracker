import React from 'react';
import PropTypes from 'prop-types';

const Feature = ({ featureData }) => {
    const { feature } = featureData;
    return ( 
        <li> {feature} </li>
     );
};

Feature.propTypes = {
    featureData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        feature: PropTypes.string.isRequired
    })
};
 
export default Feature;
