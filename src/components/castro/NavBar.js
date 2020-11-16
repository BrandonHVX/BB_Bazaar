import React, { Component } from "react";
import { Link } from "gatsby";
import MobileMenu from "./MobileMenu";
import Header from "../../components/header";
import BBLogo from "../../images/primarylogo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);

    this.mobileMenuElement = React.createRef();
  }

  activeMobileMenu = () => {
    this.mobileMenuElement.current.toggleMobileMenu();
  };

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <div>
        {/*====================  header area ====================*/}
        <div
          className={`header-area header-sticky header-sticky--default ${
            this.state.scroll > this.state.top ? "is-sticky" : ""
          }`}
        >
          <div className="header-area__desktop header-area__desktop--default">
            {/*=======  header top bar  =======*/}
            <div className="header-top-bar"></div>
            {/*=======  End of header top bar  =======*/}
            {/*=======  header info area  =======*/}
            <div className="header-info-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="header-info-wrapper align-items-center">
                      {/* logo */}
                      <div className="logo">
                        <Link to={`${process.env.PUBLIC_URL}/`}>
                          <img src={BBLogo} className="img-fluid" alt="Logo" />
                        </Link>
                      </div>
                      {/* header contact info */}
                      <div className="header-contact-info">
                        <Header />
                      </div>
                      {/* mobile menu */}
                      <div
                        className="mobile-navigation-icon"
                        id="mobile-menu-trigger"
                        onClick={this.activeMobileMenu}
                      >
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header info area =======*/}
            {/*=======  header navigation area  =======*/}
            <div className="header-navigation-area default-bg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* header navigation */}
                    <div className="header-navigation header-navigation--header-default position-relative">
                      <div className="header-navigation__nav position-static">
                        <nav>
                          <ul>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                {" "}
                                BRAND NEW{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                BACK IN STOCK
                              </Link>
                            </li>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                BOSSY
                              </Link>
                            </li>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                BABE
                              </Link>
                            </li>

                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                BATHE
                              </Link>{" "}
                            </li>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                BODY
                              </Link>{" "}
                            </li>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                BASICS
                              </Link>{" "}
                            </li>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                SALE
                              </Link>{" "}
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header navigation area =======*/}
          </div>
        </div>
        {/*====================  End of header area  ====================*/}

        {/* Mobile Menu */}
        <MobileMenu ref={this.mobileMenuElement} />
      </div>
    );
  }
}

export default NavBar;
