import React from 'react';
import './app.scss';
import dataHome from './data/data-home';

import Home from './components/home/home';
import Features from './components/home/features-section/features-section';

const App = () => {
  const { images, featuresData, featureHeading } = dataHome;
  return ( 
    <div>
      <h1>Welcome to the dreamsApp!</h1>
      <h3>Dreams can tell us A LOT about ourselves - as famously Froyd once put it: ''Dreams are a royal highway to unconscious''. They can guide us, they can warn us - predict,</h3>
      <section className='container'>
          <Home imagesArray={images}/>
      </section>
      <div>
          <Features features={featuresData} heading={featureHeading}/>
      </div>
    </div>
    );
};
 
export default App;
