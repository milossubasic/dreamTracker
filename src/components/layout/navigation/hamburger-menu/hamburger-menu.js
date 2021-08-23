import React, { useState } from 'react';

import './hamburger-menu.scss';

import NavBar from '../nav-bar';

const HambrugerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div 
        className={`navigation__hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}>
            <div className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
            </div>
            <div className='navigation__background'/>
            <nav className='navigation__hamburger-items'>
                <NavBar />
            </nav>
        </div>
    );
};
 
export default HambrugerMenu;