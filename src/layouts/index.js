import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Provider from "../context/provider";
import NavBar from "../components/castro/NavBar";
import Footer from "../components/castro/Footer";
import "./index.scss";

const Layout = ({ children }) => {
  return (
    <Provider>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <NavBar />
            {children}
            <Footer />
          </>
        )}
      />
    </Provider>
  );
};

export default Layout;
