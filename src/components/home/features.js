import React from 'react';

import Feature from './feature';

const Features = ({ heading, features }) => {
    console.log(heading, features);
    return (
        <>
            <h3>{heading}</h3>
            <ul>
                {features.map( feature => {
                    return <Feature key={feature.id} featureData={feature} />;
                })}
            </ul>
        </> 

    );
}
 
export default Features;
