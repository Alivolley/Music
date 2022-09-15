import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiSearchAlt } from "react-icons/bi";
import { CgMenuMotion, CgLogIn } from "react-icons/cg";

import CollapseHeader from "./CollapseHeader";

export default function Header() {
   const [showCollapse, setShowCollapse] = useState(false);

   const unshowCollapseMenu = () => {
      setShowCollapse(false);
   };

   return (
      <>
         <header className="header">
            <div className="container ">
               <div className="header-container">
                  <div className="logo-wrapper">
                     <Link to="/">
                        <img className="header-logo" src="/pics/jjj.png" alt="" />
                     </Link>
                     <p className="logo-title">PRO MUSIC</p>
                  </div>
                  <span className="search">
                     <BiSearchAlt className="search-icon"></BiSearchAlt>
                     <input type="text" className="search-input" placeholder="Search..." />
                  </span>
                  <ul className="header-menu">
                     <Link to="/" className="header-menu__item">
                        My library
                     </Link>
                     <Link to="/allSongs" className="header-menu__item">
                        Songs
                     </Link>
                     <Link to="/" className="header-menu__login">
                        Login <CgLogIn />
                     </Link>
                  </ul>
                  <CgMenuMotion className="uncollapser" onClick={() => setShowCollapse(true)}></CgMenuMotion>
               </div>
            </div>
         </header>
         <CollapseHeader show={showCollapse} unshow={() => unshowCollapseMenu}></CollapseHeader>
      </>
   );
}
