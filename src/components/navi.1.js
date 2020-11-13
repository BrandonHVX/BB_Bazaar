// import React, { useState } from "react";
// import { Link } from "gatsby";
// import LogoBlack from "../images/primarylogo.png";

// import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
// // Components

// const links = [
//   {
//     title: "Home",
//     path: "/intro"
//   },
//   {
//     title: "About",
//     path: "/about"
//   },
//   {
//     title: "Resume",
//     path: "/resume"
//   },
//   {
//     title: "Service",
//     path: "/service"
//   },
//   {
//     title: "Portfolio",
//     path: "/portfolio"
//   },
//   {
//     title: "Blog",
//     path: "/blog"
//   },
//   {
//     title: "Testimonial",
//     path: "/testimonial"
//   },
//   {
//     title: "Contact",
//     path: "/contact"
//   }
// ];

// function Header() {
//   const [displaySidenav, setDisplaySidenav] = useState(false);

//   const handleClick = e => {
//     e.preventDefault();
//     setDisplaySidenav(!displaySidenav);
//   };

//   return (
//     <>
//       <header className="app-header app-header-1">
//         <div className="header-logo">
//           <Link to="/" activeClassName="active">
//             <img src={LogoBlack} width={150} />
//           </Link>
//         </div>
//         <button className="button button-menu" onClick={e => handleClick(e)}>
//           <span></span>
//         </button>
//         <ul className="header-dots">
//           <li>
//             <Link to="/" activeClassName="active">
//               <span className="circle"> </span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/bio/" activeClassName="active">
//               <span className="circle"> </span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/services/" activeClassName="active">
//               <span className="circle"> </span>
//             </Link>
//           </li>
//         </ul>
//         <ul className="header-menu">
//           <li>
//             <Link to="/about/" activeClassName="active">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/content/" activeClassName="active">
//               Content
//             </Link>
//           </li>
//           <li>
//             <Link to="/services/" activeClassName="active">
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact/" activeClassName="active">
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <div className="header-follow">
//           <ul>
//             <li>
//               <a href="/#">
//                 <i className="ti-twitter-alt"></i>
//               </a>
//             </li>
//             <li>
//               <a href="/#">
//                 <i className="ti-github"></i>
//               </a>
//             </li>
//             <li>
//               <a href="/#">
//                 <i className="ti-vimeo-alt"></i>
//               </a>
//             </li>
//           </ul>
//           <p>Follow Me</p>
//         </div>
//       </header>
//       <div className={`app-sidenav ${displaySidenav && "active"}`}>
//         <div className="sidenav-menu">
//           <div className="logo">
//             {" "}
//             <img src={LogoBlack} width={150} />
//           </div>
//           <button className="button" onClick={e => handleClick(e)}></button>
//           <ul className="sidenav-nav">
//             <Link to="/" activeClassName="active">
//               <li>
//                 <span className="anchor">Home</span>
//               </li>
//             </Link>

//             <Link to="/about/" activeClassName="active">
//               <li>
//                 <span className="anchor">About</span>
//               </li>
//             </Link>
//             <Link to="/content/" activeClassName="active">
//               <li>
//                 <span className="anchor">Content</span>
//               </li>
//             </Link>
//             <Link to="/services/" activeClassName="active">
//               <li>
//                 <span className="anchor">Services</span>
//               </li>
//             </Link>
//             <Link to="/contact/" activeClassName="active">
//               <li>
//                 <span className="anchor">Contact Us</span>
//               </li>
//             </Link>
//           </ul>
//           <div className="sidenav-links">
//             <ul>
//               <li>
//                 <a href="!#">
//                   <FaTwitter className="icon" />
//                 </a>
//               </li>
//               <li>
//                 <a href="!#">
//                   <FaGithub className="icon" />
//                 </a>
//               </li>
//               <li>
//                 <a href="!#">
//                   <FaInstagram className="icon" />
//                 </a>
//               </li>
//             </ul>
//             <p>Follow Us</p>
//           </div>
//         </div>
//         <span className="sidenav-close" />
//       </div>
//     </>
//   );
// }

// export default Header;
