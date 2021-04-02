import React from 'react';

const Feature = ({ featureData }) => {
    const { feature } = featureData;
    return ( 
        <li> {feature} </li>
     );
}
 
export default Feature;