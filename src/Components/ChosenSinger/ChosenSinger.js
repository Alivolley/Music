import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConectFaild from "../ConectFaild/ConnectFaild";
import Loading from "../Loading/Loading";
import MusicCard from "../MusicCard/MusicCard";
import "./ChosenSinger.css";

export default function ChosenSinger() {
   let params = useParams();

   const [connectFaild, setConectFaild] = useState(false);
   const [singerSongs, setSingerSongs] = useState();

   useEffect(() => {
      fetch("https://djangorest.pythonanywhere.com/all-musics/")
         .then((res) => res.json())
         .then((data) => setSingerSongs(data.filter((song) => song.singer.name === params.singer)))
         .catch((err) => setConectFaild(true));
   }, []);

   return (
      <div className="container chosenSinger">
         <div className="row">
            {!singerSongs && !connectFaild && <Loading />}
            {connectFaild && <ConectFaild />}
            <h2 className="chosenSinger-title">All the {params.singer} songs</h2>
            <div className="chosenSinger-line"></div>

            {singerSongs &&
               singerSongs.map((song) => (
                  <div key={song.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                     <MusicCard title={song.title} singer={song.singer.name} route={song.id} img={`https://djangorest.pythonanywhere.com${song.avatar}`} />
                  </div>
               ))}
         </div>
      </div>
   );
}
