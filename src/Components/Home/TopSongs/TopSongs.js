import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TopSongs.css";
import { GiHearts } from "react-icons/gi";
import Loading from "../../Loading/Loading";
import ConectFaild from "../../ConectFaild/ConnectFaild";

export default function TopSongs() {
   const [allsongs, setAllsongs] = useState();
   const [topSongs, setTopSongs] = useState();
   const [connectFaild, setConectFaild] = useState(false);

   useEffect(() => {
      fetch("https://djangorest.pythonanywhere.com/all-musics/")
         .then((res) => res.json())
         .then((data) => setAllsongs(data))
         .catch((err) => setConectFaild(true));
   }, []);

   useEffect(() => {
      if (allsongs) {
         let chosenSongs = allsongs.filter((song) => song.likes >= 15);
         setTopSongs(chosenSongs);
      }
   }, [allsongs]);

   return (
      <div className="container topsongs">
         <h2 className="topsongs-title">
            Top songs of the week
            <Link to="/" className="topsongs-view">
               View all
            </Link>
         </h2>

         {!topSongs && !connectFaild && <Loading change={true} />}
         {connectFaild && <ConectFaild />}

         <div className="row">
            {topSongs &&
               topSongs.map(
                  (song, index) =>
                     index < 3 && (
                        <div key={song.id} className="col-12 col-sm-10 col-md-6 col-lg-4">
                           <Link to={`/song/${song.id}`} className="topsongs-card">
                              <div className="topsongs-card__info">
                                 <img src={`https://djangorest.pythonanywhere.com${song.avatar}`} alt="" className="topsongs-card__img" />
                                 <div className="topsongs-card__artist">
                                    <p className="topsongs-card__name">{song.title}</p>
                                    <p className="topsongs-card__singer">{song.singer.name}</p>
                                 </div>
                              </div>
                              <div className="topsongs-card__likes">
                                 <p className="topsongs-card__likes-title">
                                    Likes of the week : {song.likes} <GiHearts className="topsongs-card__likes-icon" />
                                 </p>
                              </div>
                              <button className="topsongs-card__btn">Listen</button>
                           </Link>
                        </div>
                     )
               )}
         </div>
      </div>
   );
}
