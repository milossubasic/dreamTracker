import React from 'react';
import dreamPropType from '../../../helpers/dream-prop-type';
import { NavLink } from 'react-router-dom';

import Button from '../../UI/button/button';

const Dream = ({ theDream }) => {
    const {content, fullDate, title} = theDream;
    return ( 
        <>
        <div>
            <div>{fullDate.date}, {fullDate.day}</div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
        <NavLink to='/list-of-dreams'>
            <Button>Back to list</Button>
        </NavLink>
        </>
     );
};

Dream.propTypes = dreamPropType();
 
export default Dream;
