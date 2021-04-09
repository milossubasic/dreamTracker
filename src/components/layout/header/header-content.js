import React from 'react';
import PropTypes from 'prop-types';

const HeaderContent = ({ content }) => {
    const { title, subTitle} = content;
    return (
        <div className='content'>
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
        </div>
    );
};

HeaderContent.propTypes = {
    content: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired
    })
  };
 
export default HeaderContent;
