import React, { useRef } from 'react';

const FormControl = ({ elementData, passInputValue }) => {
    const { inputType, id, labelText, placeholderText, hintText } = elementData;

    const inputRef = useRef();

    const inputChangeHandler = () => {
            passInputValue(id, inputRef.current.value);
    };

    let inputElement = null;


    switch(inputType) {
        case ( 'text' ) :
        case ( 'date' ) : 
        case ( 'email' ) : 
        case ( 'password' ) : 
        inputElement = (
                    <input 
                        type={inputType} 
                        id={id} 
                        onChange={inputChangeHandler}
                        // onBlur={blurCheck} 
                        ref={inputRef}
                        placeholder={placeholderText}
                        className={`END-section__input END-section__input--${id}`}
                    />
        );
        break;
        case ( 'textArea' ) : inputElement = (
                    <textarea 
                        id={id} 
                        onChange={inputChangeHandler}
                        // onBlur={blurCheck} 
                        ref={inputRef}
                        placeholder={placeholderText}
                        className={`END-section__input END-section__input--${id}`}
                    />
        );
        break;
        default : alert(`something is freaking wrong - like ${id} input`);
    }


    return (
        <div className='END-section__form-control'>
            <div className='END-section__legend'>
                <label className='END-section__label' htmlFor={id}> {labelText} </label>
                { hintText ? <div className='END-section__hint'> {hintText} </div> : null }
            </div>
            {inputElement}
        </div>
     );
};
 
export default FormControl;
