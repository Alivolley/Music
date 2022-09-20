import React, { useEffect, useState } from "react";
import "./CollapseHeader.css";
import { Link } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";
import { MdOutlineArrowRight } from "react-icons/md";
import Badge from "react-bootstrap/esm/Badge";
import Cookies from "js-cookie";
import { BiUserCheck } from "react-icons/bi";

export default function CollapseHeader(props) {
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
   }, [window.location.pathname]);

   return (
      <div className={`collapse-header ${props.show ? "collapse-header--show " : ""}`}>
         <div className="container">
            <IoMdCloseCircleOutline className="collapse-header__close-btn" onClick={props.unshow()}></IoMdCloseCircleOutline>
            <div className="collapse-wrapper">
               <img src="/pics/jjj.png" alt="" className="collapse-header__icon" />
               <p className="collapse-header-title">PRO MUSIC</p>
               <ul className="collapse-header__items">
                  <Link to="/" className="collapse-header__item">
                     Home
                  </Link>
                  <Link to="/dashboard" className="collapse-header__item ">
                     My library
                  </Link>
                  <div className={`${selectShow ? "collapse-songs collapse-header__item collapse-songs--show" : "collapse-songs collapse-header__item"}`}>
                     <div className="collapse-select" onClick={() => setSelectShow((prev) => !prev)}>
                        Songs <MdOutlineArrowRight className="collapse-select__icon" />
                     </div>
                     <div className="collapse-opts">
                        {allSongs && (
                           <Link to="/allSongs" className="collapse-option">
                              all songs{" "}
                              <Badge pill bg="" className="collapse-badge">
                                 {allSongs.length}
                              </Badge>
                           </Link>
                        )}

                        {selectItems &&
                           selectItems.map((genre) => (
                              <a key={genre.id} href={`/genres/${genre.title}`} className="collapse-option">
                                 {genre.title}{" "}
                                 <Badge pill bg="" className="collapse-badge">
                                    {genre.music_count}
                                 </Badge>
                              </a>
                           ))}

                        <div className="collapse-option__line"></div>
                        <Link to="/singers" className="collapse-option">
                           all Singers
                        </Link>
                     </div>
                  </div>

                  {Cookies.get("access") ? (
                     <BiUserCheck className="isLogin" />
                  ) : (
                     <Link to="/login" className="collapse-header__item">
                        Login <CgLogIn />
                     </Link>
                  )}
               </ul>
            </div>
         </div>
      </div>
   );
}
