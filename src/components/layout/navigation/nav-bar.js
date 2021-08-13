import React from 'react';
import { connect } from 'react-redux';
import routes from '../../../config/globals/routes';

import NavItem from './nav-item';
import Button from '../../UI/button/button';

const NavBar = ({ isAuthenticated }) => {
    return (
        <ul className='navigation__list'>
            {routes.map(route => {
                if ( isAuthenticated && route.name === 'Login' ){
                    return null;
                }
                return <NavItem key={route.name} routeData={route} />;
            })}
            {isAuthenticated && <li><Button>Logout</Button></li>}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isLogged
    };
};
 
export default connect(mapStateToProps)(NavBar);
