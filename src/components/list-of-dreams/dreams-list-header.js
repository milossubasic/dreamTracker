import React from 'react';

const DreamsListHeader = ({ names }) => {
    return ( 
        <div className='dreams-list-section__header'>
            <div className='dreams-list-section__header-date'>{names.column1}</div>
            <div>{names.column2}</div>
        </div>
     );
}
 
export default DreamsListHeader;