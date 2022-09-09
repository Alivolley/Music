import React from "react";
import { Link } from "react-router-dom";
import "./TopSongs.css";

export default function TopSongs() {
   return (
      <div className="container topsongs">
         <h2 className="topsongs-title">
            Top songs of the week
            <Link to="/" className="topsongs-view">
               View all
            </Link>
         </h2>

         <div className="row">
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
               <Link to="/" className="topsongs-card">
                  <div className="topsongs-card__info">
                     <img src="/pics/imagine-dragons.jpg" alt="" className="topsongs-card__img" />
                     <div className="topsongs-card__artist">
                        <p className="topsongs-card__name">Beliver</p>
                        <p className="topsongs-card__singer">Imagine Dragons</p>
                     </div>
                  </div>
                  <div className="topsongs-card__lyrics">
                     <p className="topsongs-card__lyrics-title">lyrics :</p>
                     <p className="topsongs-card__lyrics-main">
                        I was broken from a young age <br /> Taking my sulking to the masses <br /> Writing my poems for the few
                     </p>
                     <p className="topsongs-card__lyrics-rest">...</p>
                  </div>
                  <button className="topsongs-card__btn">Listen</button>
               </Link>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
               <Link to="/" className="topsongs-card">
                  <div className="topsongs-card__info">
                     <img src="/pics/the-score.jpg" alt="" className="topsongs-card__img" />
                     <div className="topsongs-card__artist">
                        <p className="topsongs-card__name">Shackdown</p>
                        <p className="topsongs-card__singer">The score</p>
                     </div>
                  </div>
                  <div className="topsongs-card__lyrics">
                     <p className="topsongs-card__lyrics-title">lyrics :</p>
                     <p className="topsongs-card__lyrics-main">
                        All those nights alone <br /> I faced my fears in the mirror <br /> I found my way to show
                     </p>
                     <p className="topsongs-card__lyrics-rest">...</p>
                  </div>
                  <button className="topsongs-card__btn">Listen</button>
               </Link>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
               <Link to="/" className="topsongs-card">
                  <div className="topsongs-card__info">
                     <img src="/pics/queen.jpg" alt="" className="topsongs-card__img" />
                     <div className="topsongs-card__artist">
                        <p className="topsongs-card__name">Bohemian Rhapsody</p>
                        <p className="topsongs-card__singer">Queen</p>
                     </div>
                  </div>
                  <div className="topsongs-card__lyrics">
                     <p className="topsongs-card__lyrics-title">lyrics :</p>
                     <p className="topsongs-card__lyrics-main">
                        Is this the real life? <br /> Is this just fantasy? <br /> Caught in a landside
                     </p>
                     <p className="topsongs-card__lyrics-rest">...</p>
                  </div>
                  <button className="topsongs-card__btn">Listen</button>
               </Link>
            </div>
         </div>
      </div>
   );
}
