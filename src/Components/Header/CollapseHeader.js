import React from "react";
import "./CollapseHeader.css";
import { Link } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";

export default function CollapseHeader(props) {
   return (
      <div className={`collapse-header ${props.show ? "collapse-header--show " : ""}`}>
         <div className="container">
            <IoMdCloseCircleOutline className="collapse-header__close-btn" onClick={props.unshow()}></IoMdCloseCircleOutline>
            <div className="collapse-wrapper">
               <img src="/pics/jjj.png" alt="" className="collapse-header__icon" />
               <p className="collapse-header-title">PRO MUSIC</p>
               <ul className="collapse-header__items">
                  <Link to="/" className="collapse-header__item active">
                     Home
                  </Link>
                  <Link to="/" className="collapse-header__item ">
                     My library
                  </Link>
                  <Link to="/" className="collapse-header__item">
                     Songs
                  </Link>
                  <Link to="/" className="collapse-header__item">
                     Login <CgLogIn />
                  </Link>
               </ul>
            </div>
         </div>
      </div>
   );
}
