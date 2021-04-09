import React from 'react';

import routes from '../../../config/globals/routes';

import NavItem from './nav-item';

const NavBar = () => {
    return (
        <ul className='navigation__list'>
            {routes.map(route => {
                return <NavItem key={route.name} routeData={route} />;
            })}
        </ul>
    );
};
 
export default NavBar;
