import React from 'react';

import './navigation.scss';

import LogoLink from '../../logo-link';
import NavBar from './nav-bar';

const Navigation = () => {
    return (
        <header>
            <div className='container'>
                <nav className='navigation'>
                    <LogoLink />
                    <NavBar />
                </nav>
            </div>
        </header>
    );
}
 
export default Navigation;