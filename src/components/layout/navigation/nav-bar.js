import React from 'react';
import { connect } from 'react-redux';
import routes from '../../../config/globals/routes';

import NavItem from './nav-item';
import Button from '../../UI/button/button';

const NavBar = ({ authenticated }) => {
    return (
        <ul className='navigation__list'>
            {routes.map(route => {
                return <NavItem key={route.name} routeData={route} />;
            })}
            {authenticated && <li><Button>Logout</Button></li>}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        authenticated: state.auth.isLogged
    };
};
 
export default connect(mapStateToProps)(NavBar);
