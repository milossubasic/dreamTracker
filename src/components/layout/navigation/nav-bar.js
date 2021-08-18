import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/auth-reducer-actions/auth-action-creators';
import routes from '../../../config/globals/routes';

import NavItem from './nav-item';
import Button from '../../UI/button/button';

const NavBar = ({ isAuthenticated, onLogout }) => {
    return (
        <ul className='navigation__list'>
            {routes.map(route => {
                if ( isAuthenticated && route.name === 'Login' ){
                    return null;
                }
                return <NavItem key={route.name} routeData={route} />;
            })}
            {isAuthenticated && <li><Button clickAction={onLogout}>Logout</Button></li>}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isLogged
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
