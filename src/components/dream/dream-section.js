import React from 'react';
import dreamPropType from '../../helpers/dream-prop-type';

import DreamNavigation from './dream-navigation/dream-navigation';

const Dream = ({ theDream }) => {
    const {story, date, title} = theDream;
    return ( 
        <section>
            <div>
                <div>{date.date}, {date.day}</div>
                <div>{title}</div>
                <div>{story}</div>
            </div>
            <DreamNavigation/>
        </section>
     );
};

Dream.propTypes = dreamPropType();
 
export default Dream;
