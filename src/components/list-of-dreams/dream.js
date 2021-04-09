import React from 'react';
import PropTypes from 'prop-types';

const Dream = ({ dreamData }) => {
    const { content, fullDate, title } = dreamData;
    return (
        <div>
            <div>
                <div className='day'>{fullDate.day}</div>
                <div className='date'>{fullDate.date}</div>
                <div className='month'>{fullDate.month}</div>
            </div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    );
};

Dream.propTypes = {
    dreamData: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        fullDate: PropTypes.shape ({
            date: PropTypes.number.isRequired,
            day: PropTypes.string.isRequired,
            month: PropTypes.number.isRequired
        }),
        title: PropTypes.string.isRequired
    })
}
 
export default Dream;
