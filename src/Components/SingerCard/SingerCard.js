import React from "react";
import { Link } from "react-router-dom";
import "./SingerCard.css";

export default function SingerCard({ img, title, genre, route }) {
   return (
      <div className="singercard">
         <img className="singercard-img" src={img} alt="" />
         <div className="singercard-wrapper">
            <div className="singercard-name__wrapper">
               <p className="singercard-name__label">Name : </p>
               <p className="singercard-name__main">{title}</p>
            </div>
            <div className="singercard-genre__wrapper">
               <p className="singercard-genre__label">Common genre : </p>
               <p className="singercard-genre__main">{genre}</p>
            </div>
            <Link to={`/singers/${route}`} className="singercard-btn">
               See all it's songs
            </Link>
         </div>
      </div>
   );
}
