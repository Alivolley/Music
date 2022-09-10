import React from "react";
import "./Home.css";
import Land from "./Land/Land";
import Permium from "./Permium/Permium";
import TopSongs from "./TopSongs/TopSongs";
import Trend from "./Trends/Trends";

export default function Home() {
   return (
      <>
         <Land />
         <Permium />
         <TopSongs />
         <Trend />
      </>
   );
}
