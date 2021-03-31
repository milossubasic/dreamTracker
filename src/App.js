import React from 'react';
import './app.scss';
import imagesFile from './data/home';

import Home from './components/home/home';

const App = () => {
  return ( 
    <div>
      <h1>Welcome to the dreamsApp!</h1>
      <h3>Dreams can tell us A LOT about ourselves - as famously Froyd once put it: ''Dreams are a royal highway to unconscious''. They can guide us, they can warn us - predict,</h3>
      <section className='container'>
          <Home imagesArray={imagesFile}/>
      </section>
      <div>
          Features section.
          <ul>
              <li>ovo</li>
              <li>ono</li>
              <li>ovo</li>
              <li>ono</li>
          </ul>
      </div>
    </div>
    );
};
 
export default App;
