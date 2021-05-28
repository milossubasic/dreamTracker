import React, { useRef } from 'react';

const FormControl = ({ elementData, passInputValue }) => {
    const { inputType, id, forLabel } = elementData;

    const inputRef = useRef();

    const inputChangeHandler = () => {
            passInputValue(id, inputRef.current.value);
    };

    let inputElement = null;


    switch(inputType) {
        case ( 'text' ) : inputElement = (
            <>
                <label htmlFor={id}>{forLabel}</label>
                <input 
                    type={inputType} 
                    id={id} 
                    onChange={inputChangeHandler}
                    // onBlur={blurCheck} 
                    ref={inputRef}
                />
            </>
        );
        break;
        case ( 'date' ) : inputElement = (
                <label>
                    {forLabel}
                    <input 
                        type={inputType} 
                        id={id} 
                        onChange={inputChangeHandler}
                        // onBlur={blurCheck} 
                        ref={inputRef}
                    />
                </label>
        );
        break;
        default : prompt('something is freaking wrong');
    }


    return (
        <div className='END-section__form-control'>
            {inputElement}
        </div>
     );
};
 
export default FormControl;
