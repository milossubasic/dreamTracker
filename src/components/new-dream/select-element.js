import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const SelectElement = ({ elementData, passInputValue }) => {
    const { id, names } = elementData;

    const selectRef = useRef();

    const inputChangeHandler = () => {
        passInputValue(id, selectRef.current.value, true);
    };

    return (
        <select ref={selectRef} onChange={inputChangeHandler}>
            {names.map(element => <option key={element.id} value={element.value} >{element.value}</option>)}
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
