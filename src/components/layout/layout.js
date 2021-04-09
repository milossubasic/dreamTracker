import React from "react";
import PropTypes from "prop-types";

import Navigation from './navigation/navigation';

//import "../styles/style.scss";

//import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
