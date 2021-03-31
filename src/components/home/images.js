import React from 'react';

const Images = ({ imageData}) => {

    const {photo, altText} = imageData;
    return ( 
        <img src={photo} alt={altText}/>
     );
}
 
export default Images;