import React from 'react';
import PropTypes from 'prop-types';

const SelectElement = ({ arrayForOutput }) => {

    return (
        <select>
            {arrayForOutput.map(element => <option key={element.id}>{element.value}</option>)}
        </select>
    );
};

SelectElement.propTypes = {
    arrayForOutput: PropTypes.arrayOf(
        PropTypes.shape({
                id: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired
            })
    )
};
 
export default SelectElement;
