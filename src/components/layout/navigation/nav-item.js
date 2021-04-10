import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ routeData }) => {
    const {name, path} = routeData;
    return ( 
        <li className='navigation__item'>
            <NavLink to={path} exact activeClassName='current' >{name}</NavLink>
        </li>
     );
};

NavItem.propTypes = {
    routeData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })
};
 
export default NavItem;
