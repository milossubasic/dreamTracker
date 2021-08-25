import React from 'react';
import PropTypes from 'prop-types';

const DreamsListHeader = ({ names }) => {
    return ( 
        <div className='dreams-list-section__header'>
            <div className='dreams-list-section__header-date'>{names.column1}</div>
            <div>{names.column2}</div>
        </div>
     );
};

DreamsListHeader.propTypes = {
    names: PropTypes.shape({
                    column1: PropTypes.string.isRequired,
                    column2: PropTypes.string.isRequired
            })
};
 
export default DreamsListHeader;
