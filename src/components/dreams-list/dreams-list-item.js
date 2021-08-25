import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { make_dream_active } from '../../store/actions/dreams-reducer-actions/actionCreators';

const DreamsListItem = ({ dreamData, clicked }) => {
    const { summary, date, id} = dreamData;
    return (
        <li className='dreams-list-section__list-item' onClick={() => clicked(id)}>
            <NavLink to='/dream'>
                <div className='dreams-list-section__dream'>
                    <div className='dreams-list-section__date-of-dream'>
                        <div className='dreams-list-section__day'>{date.day},</div>
                        <div className='dreams-list-section__date'>{date.date}.</div>
                    </div>
                    <div className='dreams-list-section__description'>{summary}</div>
                </div>
            </NavLink>
        </li>
    );
};

DreamsListItem.propTypes = {
    dreamData: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        date: PropTypes.shape ({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            date: PropTypes.number.isRequired,
            day: PropTypes.string.isRequired
        })
    }),
    clicked: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        clicked: (dreamID) => dispatch(make_dream_active(dreamID))
    };
};
 
export default connect(null, mapDispatchToProps)(DreamsListItem);
