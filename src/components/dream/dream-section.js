import React from 'react';
import dreamPropType from '../../helpers/dream-prop-type';

import './dream-section.scss';

import DreamNavigation from './dream-navigation/dream-navigation';

const Dream = ({ theDream, dreamData }) => {
    const { story, date, title } = theDream;
    const { backLinkText } = dreamData;
    return ( 
        <section className='dream-section'>
            <div className='container'>
                <div>
                    <div className='dream-section__date'> {date.day}, {date.date}.{date.month}. </div>
                    <h4 className='dream-section__title'> {title} </h4>
                    <div className='dream-section__story'> {story} </div>
                </div>
                <div className='dream-section__navigation'>
                    <DreamNavigation backLinkText={backLinkText} />
                </div>
            </div>
        </section>
     );
};

Dream.propTypes = dreamPropType();
 
export default Dream;
