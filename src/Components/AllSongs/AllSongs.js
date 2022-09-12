import React from "react";
import "./AllSongs.css";
import MusicCard from "../MusicCard/MusicCard";

export default function AllSongs() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
               <MusicCard img={`/pics/1.jpg`} />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
               <MusicCard img={`/pics/2.jpg`} />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
               <MusicCard img={`/pics/imagine-dragons.jpg`} />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
               <MusicCard img={`/pics/3.jpg`} />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
               <MusicCard img={`/pics/4.jpg`} />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
               <MusicCard img={`/pics/3.jpg`} />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
               <MusicCard img={`/pics/5.jpg`} />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
               <MusicCard img={`/pics/zayde-wolf.jpeg`} />
            </div>
         </div>
      </div>
   );
}
