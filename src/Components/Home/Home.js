import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Land from "./Land/Land";
import Permium from "./Permium/Permium";
import TopSongs from "./TopSongs/TopSongs";
import Trend from "./Trends/Trends";
import Footer from "../Footer/Footer";

export default function Home() {
   return (
      <>
         <Header />
         <Land />
         <Permium />
         <TopSongs />
         <Trend />
         <Footer />
      </>
   );
}
