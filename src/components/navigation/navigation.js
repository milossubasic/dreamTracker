import React from 'react';

import './navigation.scss';
import menuLinks from '../../config/globals/routes';

import LogoLink from '../logo-link';
import NavBar from './nav-bar';

const Navigation = () => {
    return (
        <div className='container'>
            <nav className='navigation'>
                <LogoLink />
                <NavBar links={menuLinks} />
            </nav>
        </div>
    );
}
 
export default Navigation;