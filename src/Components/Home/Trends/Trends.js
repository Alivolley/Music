import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Trends.css";
import { AiFillPlayCircle } from "react-icons/ai";
import Loading from "../../Loading/Loading";
import ConectFaild from "../../ConectFaild/ConnectFaild";

export default function Trends() {
   const [allsongs, setAllsongs] = useState();
   const [connectFaild, setConectFaild] = useState(false);

   useEffect(() => {
      fetch("https://djangorest.pythonanywhere.com/all-musics/")
         .then((res) => res.json())
         .then((data) => setAllsongs(data))
         .catch((err) => setConectFaild(true));
   }, []);

   return (
      <div className="trend container">
         <h2 className="topsongs-title">
            What is trend
            <Link to="/allSongs" className="topsongs-view">
               View all
            </Link>
         </h2>

         {!allsongs && !connectFaild && <Loading />}
         {connectFaild && <ConectFaild />}
         <div className="row">
            {allsongs &&
               allsongs.map(
                  (song, index) =>
                     index < 6 && (
                        <div className="col-6" key={song.id}>
                           <Link to={`/song/${song.id}`} className="trend-card">
                              <img src={`https://djangorest.pythonanywhere.com${song.avatar}`} alt="" className="trend-card__img" />
                              <div className="trend-card__info">
                                 <p className="trend-card__song">{song.singer.name}</p>
                                 <p className="trend-card__singer">{song.title}</p>
                              </div>
                              <AiFillPlayCircle className="trend-card__icon" />
                           </Link>
                        </div>
                     )
               )}
         </div>
      </div>
   );
}
