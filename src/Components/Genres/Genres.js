import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConectFaild from "../ConectFaild/ConnectFaild";
import Loading from "../Loading/Loading";
import MusicCard from "../MusicCard/MusicCard";
import "./Genres.css";

export default function Genres() {
   const [genreSongs, setGenreSongs] = useState();
   const [connectFaild, setConectFaild] = useState(false);

   let params = useParams();

   useEffect(() => {
      fetch("https://djangorest.pythonanywhere.com/all-musics/")
         .then((res) => res.json())
         .then((data) => {
            setGenreSongs(data.filter((item) => item.style.title === params.genre));
         })
         .catch((err) => setConectFaild(true));
   }, []);

   return (
      <div className="container genres">
         <div className="row">
            <h2 className="genre-title">All the {params.genre} songs</h2>
            <div className="genre-line"></div>

            {!genreSongs && !connectFaild && <Loading />}
            {connectFaild && <ConectFaild />}

            {genreSongs &&
               genreSongs.map((song) => (
                  <div key={song.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                     <MusicCard title={song.title} singer={song.singer.name} route={song.id} img={`https://djangorest.pythonanywhere.com${song.avatar}`} />
                  </div>
               ))}
         </div>
      </div>
   );
}
