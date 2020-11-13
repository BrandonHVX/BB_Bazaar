// import React, { useState } from "react";
// import { Link } from "gatsby";
// import LogoBlack from "../images/primarylogo.png";
// import HeaderTop from "./Header";
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

// function Navi() {
//   const [displaySidenav, setDisplaySidenav] = useState(false);

//   const handleClick = e => {
//     e.preventDefault();
//     setDisplaySidenav(!displaySidenav);
//   };

//   return (
//     <>
//       <HeaderTop />
//       <nav class="navbar-top navbar-expand-sm ">
//         <span class="navbar-text">Hello</span>
//         <ul class="navbar-nav abs-center-x">
//           <li class="nav-item">
//             <Link class="nav-link" to="/">
//               <img src={LogoBlack} width={150} alt="" />
//             </Link>
//           </li>
//         </ul>
//         <span class="navbar-text">Hello</span>
//       </nav>
//       <nav class="navbar navbar-expand-lg navbar-black">
//         <div class="container">
//           <div class="navbar-collapse collapse" id="navbar10">
//             <ul class="navbar-nav nav-fill w-100">
//               <li class="nav-item">
//                 <Link class="nav-link" to="/brand-new">
//                   BRAND NEW
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" to="/back-in-stock">
//                   BACK IN STOCK
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" to="/bossy">
//                   BOSSY
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" to="/babe">
//                   BABE
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" to="/body">
//                   BODY
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" to="/basics">
//                   BASICS
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" href="#">
//                   BATHE
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   SALE
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navi;
