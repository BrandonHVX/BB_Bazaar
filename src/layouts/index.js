import React from "react";
import { StaticQuery, graphql } from "gatsby";

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
            {children}
            <Footer />
          </>
        )}
      />
    </Provider>
  );
};

export default Layout;
