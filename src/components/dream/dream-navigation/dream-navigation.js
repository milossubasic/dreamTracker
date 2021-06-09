import React from 'react';
import { NavLink } from 'react-router-dom';

const DreamNavigation = () => {
    return (
        <NavLink to='/list-of-dreams'>
            Back to list
        </NavLink>
    );
}
 
export default DreamNavigation;