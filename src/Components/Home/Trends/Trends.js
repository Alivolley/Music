import React from "react";
import { Link } from "react-router-dom";
import "./Trends.css";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Trends() {
   return (
      <div className="trend container">
         <h2 className="topsongs-title">
            What is trend
            <Link to="/" className="topsongs-view">
               View all
            </Link>
         </h2>
         <div className="row">
            <div className="col-6">
               <Link to="/" className="trend-card">
                  <img src="/pics/imagine-dragons.jpg" alt="" className="trend-card__img" />
                  <div className="trend-card__info">
                     <p className="trend-card__song">Beliver</p>
                     <p className="trend-card__singer">Imagine dragons</p>
                  </div>
                  <AiFillPlayCircle className="trend-card__icon" />
               </Link>
            </div>
            <div className="col-6">
               <Link to="/" className="trend-card">
                  <img src="/pics/the-score.jpg" alt="" className="trend-card__img" />
                  <div className="trend-card__info">
                     <p className="trend-card__song">Beliver</p>
                     <p className="trend-card__singer">Imagine dragons</p>
                  </div>
                  <AiFillPlayCircle className="trend-card__icon" />
               </Link>
            </div>
            <div className="col-6">
               <Link to="/" className="trend-card">
                  <img src="/pics/queen.jpg" alt="" className="trend-card__img" />
                  <div className="trend-card__info">
                     <p className="trend-card__song">Beliver</p>
                     <p className="trend-card__singer">Imagine dragons</p>
                  </div>
                  <AiFillPlayCircle className="trend-card__icon" />
               </Link>
            </div>
            <div className="col-6">
               <Link to="/" className="trend-card">
                  <img src="/pics/imagine-dragons.jpg" alt="" className="trend-card__img" />
                  <div className="trend-card__info">
                     <p className="trend-card__song">Beliver</p>
                     <p className="trend-card__singer">Imagine dragons</p>
                  </div>
                  <AiFillPlayCircle className="trend-card__icon" />
               </Link>
            </div>
            <div className="col-6">
               <Link to="/" className="trend-card">
                  <img src="/pics/the-score.jpg" alt="" className="trend-card__img" />
                  <div className="trend-card__info">
                     <p className="trend-card__song">Beliver</p>
                     <p className="trend-card__singer">Imagine dragons</p>
                  </div>
                  <AiFillPlayCircle className="trend-card__icon" />
               </Link>
            </div>
            <div className="col-6">
               <Link to="/" className="trend-card">
                  <img src="/pics/queen.jpg" alt="" className="trend-card__img" />
                  <div className="trend-card__info">
                     <p className="trend-card__song">Beliver</p>
                     <p className="trend-card__singer">Imagine dragons</p>
                  </div>
                  <AiFillPlayCircle className="trend-card__icon" />
               </Link>
            </div>
         </div>
      </div>
   );
}
