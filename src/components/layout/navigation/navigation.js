import React from 'react';

import './navigation.scss';

import LogoLink from '../../logo-link';
import NavBar from './nav-bar';
import HamburgerMenu from './hamburger-menu/hamburger-menu';

const Navigation = () => {
    return (
        <header>
            <div className='container'>
                <nav className='navigation'>
                    <LogoLink />
                    <NavBar />
                    <HamburgerMenu />
                </nav>
            </div>
        </header>
    );
}
 
export default Navigation;