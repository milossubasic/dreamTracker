import React from "react";
import PropTypes from "prop-types";

import Navigation from './navigation/navigation';
import Footer from "./footer/footer";

import './layout.scss';

//import "../styles/style.scss";


const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='layout__main'>
        <Navigation />
        <main>{children}</main>
      </div>
      <div className='layout__footer'>
       <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
