import React from 'react';
import './app.scss';
import { Route } from 'react-router-dom';
import Layout from './components/layout';

import Index from './pages/index';
import Login from './pages/login';

const App = () => {

  return ( 
    <Layout>
      <Route path='/' exact component={Index} />
      <Route path='/login' component={Login} />
    </Layout>
    );
};
 
export default App;
