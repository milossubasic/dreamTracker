import React from 'react';
import PropTypes from 'prop-types';

import HeaderContent from './header-content';

const Header = ({ content }) => {

    return (
        <header>
            <div className="container">
                {/* <TopMenu navLinks={navLinks} logo={logo} /> */}
                <HeaderContent content={content} />
            </div>
        </header>
    );
};

Header.propTypes = {
    content: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired
    })
  };
 
export default Header;
