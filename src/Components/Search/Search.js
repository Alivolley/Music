import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ConectFaild from "../ConectFaild/ConnectFaild";
import Loading from "../Loading/Loading";
import MusicCard from "../MusicCard/MusicCard";
import "./Search.css";

export default function Search() {
   const [searchedSongs, setSearchedSongs] = useState();
   const [connectFaild, setConectFaild] = useState(false);
   const [notFound, setNotFound] = useState(false);

   let params = useParams();
   let location = useLocation();

   useEffect(() => {
      fetch(`https://djangorest.pythonanywhere.com/search/${params.title}/`)
         .then((res) => (res.status === 200 ? res.json() : setNotFound(true)))
         .then((data) => {
            setSearchedSongs(data);
         })
         .catch((err) => setConectFaild(true));
   }, []);

   useEffect(() => {
      setNotFound(false);
      fetch(`https://djangorest.pythonanywhere.com/search/${params.title}/`)
         .then((res) => (res.status === 200 ? res.json() : setNotFound(true)))
         .then((data) => {
            setSearchedSongs(data);
         })
         .catch((err) => setConectFaild(true));
   }, [location.pathname]);

   return (
      <div className="container search-song">
         <div className="row">
            <h2 className="search-song-title">Search results for {params.title}</h2>
            <div className="search-song-line"></div>

            {!searchedSongs && !connectFaild && !notFound && <Loading />}
            {connectFaild && <ConectFaild />}

            {notFound && <p>No such music with searched information</p>}

            {searchedSongs &&
               searchedSongs.map((song) => (
                  <div key={song.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                     <MusicCard title={song.title} singer={song.singer.name} route={song.id} img={`https://djangorest.pythonanywhere.com${song.avatar}`} />
                  </div>
               ))}
         </div>
      </div>
   );
}
