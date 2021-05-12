import React from 'react';

import './hamburger-menu.scss';

import NavBar from '../nav-bar';

const HambrugerMenu = () => {
    return (
        <div className='navigation__hamburger'>
            <input type='checkbox' id='menu' className='navigation__checkbox'/>
            <label htmlFor='menu' className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
            </label>
            <div className='navigation__background'/>
            <nav className='navigation__hamburger-items'>
                <NavBar />
            </nav>
        </div>
    );
}
 
export default HambrugerMenu;