import React from 'react';
import dreamPropType from '../../../helpers/dream-prop-type';
import { NavLink } from 'react-router-dom';

import Button from '../../UI/button/button';

const Dream = ({ theDream }) => {
    const {story, date, title} = theDream;
    return ( 
        <>
        <div>
            <div>{date.date}, {date.day}</div>
            <div>{title}</div>
            <div>{story}</div>
        </div>
        <NavLink to='/list-of-dreams'>
            <Button>Back to list</Button>
        </NavLink>
        </>
     );
};

Dream.propTypes = dreamPropType();
 
export default Dream;
