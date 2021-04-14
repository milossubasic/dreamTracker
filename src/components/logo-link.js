import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/logo/Klein_bottle.svg';

const LogoLink = () => {
    return (
        <NavLink to='/'>
            <img src={logo} alt='Logo' className='navigation__logo'/>
        </NavLink>
    );
}
 
export default LogoLink;