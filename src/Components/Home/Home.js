import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Land from "./Land/Land";
import Permium from "./Permium/Permium";
import TopSongs from "./TopSongs/TopSongs";

export default function Home() {
   return (
      <>
         <Header />
         <Land />
         <Permium />
         <TopSongs />
      </>
   );
}
