import React, { useEffect, useState } from "react";
import "./AllSongs.css";
import MusicCard from "../MusicCard/MusicCard";
import Loading from "../Loading/Loading";
import ConectFaild from "../ConectFaild/ConnectFaild";

export default function AllSongs() {
   const [allSongs, setAllSongs] = useState();
   const [connectFaild, setConectFaild] = useState(false);

   useEffect(() => {
      fetch("https://djangorest.pythonanywhere.com/all-musics/")
         .then((res) => res.json())
         .then((data) => setAllSongs(data))
         .catch((err) => setConectFaild(true));
   }, []);

   return (
      <div className="container allSongs">
         <div className="row">
            {!allSongs && !connectFaild && <Loading />}
            {connectFaild && <ConectFaild />}

            {allSongs &&
               allSongs.map((song) => (
                  <div key={song.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                     <MusicCard title={song.title} singer={song.singer.name} route={song.id} img={`https://djangorest.pythonanywhere.com${song.avatar}`} />
                  </div>
               ))}
         </div>
      </div>
   );
}
