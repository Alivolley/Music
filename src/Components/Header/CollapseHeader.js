import React from "react";
import "./CollapseHeader.css";
import { Link } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function CollapseHeader(props) {
   return (
      <div className={`collapse-header ${props.show ? "collapse-header--show " : ""}`}>
         <div className="container">
            <IoMdCloseCircleOutline className="collapse-header__close-btn" onClick={props.unshow()}></IoMdCloseCircleOutline>
            <div className="collapse-wrapper">
               <img src="/pics/favicon.png" alt="" className="collapse-header__icon" />
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
                  Need help?
               </Link>
               <img src="/pics/download-logos.png" alt="" className="collapse-header__download-logos" />
            </div>
         </div>
      </div>
   );
}
