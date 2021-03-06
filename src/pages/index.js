import React from 'react';

//import Layout from '../components/layout';
import Heading from '../components/layout/heading/heading';
import ImagesSection from '../components/home/images-section/images-section';
import FeaturesSection from '../components/home/features-section/features-section';

import dataHome from '../data/data-home';

const Index = () => {
    const { headContent, images, featureHeading, featuresData } = dataHome;

    return ( 
        <>
            <Heading content={headContent}/>
            <ImagesSection imagesArray={images}/>
            <FeaturesSection heading={featureHeading} features={featuresData} />
            {/* <div>
                <h1>Welcome to the dreamsApp!</h1>
                <h3>Dreams can tell us A LOT about ourselves - as famously Froyd once put it: ''Dreams are a royal highway to unconscious''. They can guide us, they can warn us - predict,</h3>
                <section className='container'>
                    <Home imagesArray={images}/>
                </section>
                <div>
                    <Features features={featuresData} heading={featureHeading}/>
                </div>
            </div> */}
        </>
     );
};
 
export default Index;
