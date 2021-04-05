import React from 'react';
//import './app.scss';
import { Route } from 'react-router-dom';

import Index from './pages/index';
import Login from './pages/login';

const App = () => {

  return ( 
    <>
      <Route path='/' exact component={Index} />
      <Route path='/login' component={Login} />
    </>
    );
};
 
export default App;
