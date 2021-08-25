import React from 'react';
import './app.scss';
import { Route } from 'react-router-dom';
import Layout from './components/layout/layout';

import Index from './pages/index';
import Auth from './pages/auth';
import DreamsList from './pages/dreams-list';
import Dream from './pages/dream';
import NewDream from './pages/new-dream';

const App = () => {

  return ( 
    <Layout>
      <Route path='/' exact component={Index} />
      <Route path='/auth' component={Auth} />
      <Route path='/list-of-dreams' component={DreamsList} />
      <Route path='/dream' component={Dream} />
      <Route path='/new-dream' component={NewDream} />
    </Layout>
    );
};
 
export default App;
