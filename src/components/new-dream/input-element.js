import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const InputElement = ({ elementData, passInputValue }) => {
    const { inputType, id, forLabel } = elementData;

    const inputRef=useRef();

    const inputChangeHandler = () => {
        passInputValue(id, inputRef.current.value);
    };

    return (
        <> 
            <div className='END-section__form-control'>
                <label htmlFor={id}>{forLabel}</label>
                <input 
                    type={inputType} 
                    id={id} 
                    onChange={inputChangeHandler}
                    // onBlur={blurCheck} 
                    ref={inputRef}
                />
                {/* {inputValidityWhole && <p>Hey man, you need to have something in this input.</p>} */}
            </div>
        </>
     );
};

InputElement.propTypes = {
    elementData: PropTypes.shape({
            inputType: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            forLabel: PropTypes.string.isRequired
        })
};
 
export default InputElement;
