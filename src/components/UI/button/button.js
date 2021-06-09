import React from 'react';

const Button = ({ children, type }) => {

    const buttonType = type ? type : null;

    return ( <button type={buttonType}> {children} </button> );
}
 
export default Button;