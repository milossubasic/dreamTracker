import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ routeData }) => {
    const {name, link} = routeData;
    return ( 
        <li className='navigation__item'>
            <NavLink to={link} activeClassName='current' >{name}</NavLink>
        </li>
     );
};

NavItem.propTypes = {
    routeData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })
};
 
export default NavItem;
