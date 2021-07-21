import React from 'react';

const Button = ({ children, type, clickAction }) => {

    const buttonType = type ? type : 'button';
    const clickHandler = clickAction ? clickAction : null;


    return ( <button type={buttonType} onClick={clickHandler}> {children} </button> );
}
 
export default Button;