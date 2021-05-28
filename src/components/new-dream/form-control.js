import React, { useRef } from 'react';

const FormControl = ({ elementData, passInputValue }) => {
    const { inputType, id, forLabel, names } = elementData;

    const inputRef = useRef();

    const defaultDate = new Date();

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
                <label htmlFor={id}>{forLabel}
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
        case ( 'select' ) : inputElement = (
            <select ref={inputRef} onChange={inputChangeHandler}>
            {names.map(element => <option key={element.id} value={element.value} >{element.value}</option>)}
        </select>
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
