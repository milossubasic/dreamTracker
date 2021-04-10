import React from 'react';
import PropTypes from 'prop-types';

const HeadingContent = ({ content }) => {
    const { title, subTitle} = content;
    return (
        <div className='content'>
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
        </div>
    );
};

HeadingContent.propTypes = {
    content: PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string
    })
  };
 
export default HeadingContent;
