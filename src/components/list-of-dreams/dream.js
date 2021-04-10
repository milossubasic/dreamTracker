import React from 'react';
import PropTypes from 'prop-types';

const Dream = ({ dreamData }) => {
    const { description, fullDate} = dreamData;
    return (
        <div className='list-section__dream'>
            <div className='list-section__date-of-dream'>
                <div className='list-section__day'>{fullDate.day},</div>
                <div className='list-section__date'>{fullDate.date}.</div>
            </div>
            <div className='list-section__description'>{description}</div>
        </div>
    );
};

Dream.propTypes = {
    dreamData: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        fullDate: PropTypes.shape ({
            date: PropTypes.number.isRequired,
            day: PropTypes.string.isRequired,
            month: PropTypes.number.isRequired
        })
    })
}
 
export default Dream;
