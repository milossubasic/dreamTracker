import React from 'react';
import { NavLink } from 'react-router-dom';

const DreamNavigation = ({ backLinkText }) => {
    return (
        <NavLink to='/list-of-dreams'>
            &larr;{ backLinkText }
        </NavLink>
    );
}
 
export default DreamNavigation;