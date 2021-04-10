import React from 'react';
import PropTypes from 'prop-types';

import HeadingContent from './heading-content';

const Heading = ({ content }) => {

    return (
            <div className="container">
                {/* <TopMenu navLinks={navLinks} logo={logo} /> */}
                <HeadingContent content={content} />
            </div>
    );
};

Heading.propTypes = {
    content: PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string
    })
  };
 
export default Heading;
