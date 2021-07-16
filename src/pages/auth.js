import React from 'react';

import authData from '../data/data-auth';

import AuthenticateSection from '../components/authenticate/authenticate-section';

const Login = () => {
    const { authFormControls } = authData;
    return ( 
    <AuthenticateSection authFormControls={authFormControls} />
    );
}
 
export default Login;