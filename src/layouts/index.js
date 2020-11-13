import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import HeaderOne from "../wrappers/header/HeaderOne";

import Footer from "../components/footer";
import Provider from "../context/provider";
import "./layout.scss";
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
            <Header />
            <HeaderOne />
            {children}
            <Footer />
          </>
        )}
      />
    </Provider>
  );
};

export default Layout;
