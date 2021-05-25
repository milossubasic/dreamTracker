import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { make_dream_active } from '../../store/actions/actionCreators';

const DreamsListItem = ({ dreamData, clicked }) => {
    const { description, fullDate, id} = dreamData;
    return (
        <li className='dreams-list-section__list-item' onClick={() => clicked(id)}>
            <NavLink to='/dream'>
                <div className='dreams-list-section__dream'>
                    <div className='dreams-list-section__date-of-dream'>
                        <div className='dreams-list-section__day'>{fullDate.day},</div>
                        <div className='dreams-list-section__date'>{fullDate.date}.</div>
                    </div>
                    <div className='dreams-list-section__description'>{description}</div>
                </div>
            </NavLink>
        </li>
    );
};

DreamsListItem.propTypes = {
    dreamData: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        fullDate: PropTypes.shape ({
            date: PropTypes.number.isRequired,
            day: PropTypes.string.isRequired,
            month: PropTypes.number.isRequired
        })
    })
};

const mapDispatchToProps = dispatch => {
    return {
        clicked: (dreamID) => dispatch(make_dream_active(dreamID))
    };
};
 
export default connect(null, mapDispatchToProps)(DreamsListItem);
