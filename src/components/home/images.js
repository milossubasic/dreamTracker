import React from 'react';

const Images = ({ imageData }) => {

    const {id, photo, link, altText} = imageData;
    const cssClass = `container__image container__image--${id}`
    return ( 
        <a href={link}>
            <img 
                src={photo} 
                alt={altText}
                className={cssClass}/>
        </a>
     );
};
 
export default Images;
