import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiSearchAlt, BiUserCheck } from "react-icons/bi";
import { CgMenuMotion, CgLogIn } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import CollapseHeader from "./CollapseHeader";
import Cookies from "js-cookie";

export default function Header() {
   const [showCollapse, setShowCollapse] = useState(false);
   const [selectShow, setSelectShow] = useState(false);
   const [selectItems, setSelectItems] = useState();
   const [allSongs, setAllSongs] = useState();

   useEffect(() => {
      fetch("https://djangorest.pythonanywhere.com/all-styles/")
         .then((res) => res.json())
         .then((data) => setSelectItems(data))
         .catch((err) => console.log(err));

      fetch("https://djangorest.pythonanywhere.com/all-musics/")
         .then((res) => res.json())
         .then((data) => setAllSongs(data))
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      setSelectShow(false);
      setShowCollapse(false);
   }, [window.location.pathname]);

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
                     <div className={`${selectShow ? "header-songs header-songs--show" : "header-songs"}`}>
                        <div className="header-select" onClick={() => setSelectShow((prev) => !prev)}>
                           Songs <MdOutlineArrowDropDown className="header-select__icon" />
                        </div>
                        <div className="header-opts">
                           {allSongs && (
                              <Link to="/allSongs" className="header-option">
                                 all songs{" "}
                                 <Badge pill bg="" className="header-badge">
                                    {allSongs.length}
                                 </Badge>
                              </Link>
                           )}

                           {selectItems &&
                              selectItems.map((genre) => (
                                 <a key={genre.id} href={`/genres/${genre.title}`} className="header-option">
                                    {genre.title}{" "}
                                    <Badge pill bg="" className="header-badge">
                                       {genre.music_count}
                                    </Badge>
                                 </a>
                              ))}

                           <div className="header-option__line"></div>
                           <Link to="/singers" className="header-option">
                              all Singers
                           </Link>
                        </div>
                     </div>

                     {Cookies.get("access") ? (
                        <Link to="/">
                           <BiUserCheck className="isLogin" />
                        </Link>
                     ) : (
                        <Link to="/login" className="header-menu__login">
                           Login <CgLogIn />
                        </Link>
                     )}
                  </ul>
                  <CgMenuMotion className="uncollapser" onClick={() => setShowCollapse(true)}></CgMenuMotion>
               </div>
            </div>
         </header>
         <CollapseHeader show={showCollapse} unshow={() => unshowCollapseMenu}></CollapseHeader>
      </>
   );
}
