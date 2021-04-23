import React from 'react';
import './app.scss';
import { Route } from 'react-router-dom';
import Layout from './components/layout/layout';

import Index from './pages/index';
import Login from './pages/login';
import ListOfDreams from './pages/list-of-dreams';
import Dream from './pages/dream';

const App = () => {

  return ( 
    <Layout>
      <Route path='/' exact component={Index} />
      <Route path='/login' component={Login} />
      <Route path='/list-of-dreams' component={ListOfDreams} />
      <Route path='/dream' component={Dream} />
    </Layout>
    );
};
 
export default App;
