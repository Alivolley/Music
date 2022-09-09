import React from "react";
import "./Permium.css";

export default function Permium() {
   return (
      <div className="container">
         <div className="row permium">
            <div className="col-12 col-md-5 col-lg-6">
               <img src="/pics/phone_pic.png" alt="" className="permium-img" />
            </div>
            <div className="col-12 col-md-7 col-lg-6">
               <img src="/pics/music-icon.png" alt="" className="permium-icon" />
               <h2 className="permium-title">
                  Play full songs with permium account. Get up to <span> 3 months </span>free
               </h2>
               <button className="permium-btn">TRY NOW</button>
            </div>
         </div>
      </div>
   );
}
