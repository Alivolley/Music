import React, { useEffect, useState } from "react";
import "./Singers.css";
import SingerCard from "../SingerCard/SingerCard";
import ConectFaild from "../ConectFaild/ConnectFaild";
import Loading from "../Loading/Loading";

export default function Singers() {
   const [allSingers, setAllSingers] = useState();
   const [connectFaild, setConectFaild] = useState(false);

   useEffect(() => {
      fetch("https://djangorest.pythonanywhere.com/singer/all/")
         .then((res) => res.json())
         .then((data) => setAllSingers(data))
         .catch((err) => setConectFaild(true));
   }, []);
   console.log(allSingers && allSingers[1].styles);

   return (
      <div className="container singers">
         <h2 className="singers-title">This is all singers that have songs on this site</h2>
         <div className="singers-line"></div>
         <div className="row">
            {!allSingers && !connectFaild && <Loading />}
            {connectFaild && <ConectFaild />}

            {allSingers &&
               allSingers.map((singer) => (
                  <div key={singer.id} className="col-12 col-md-6">
                     <SingerCard img={`https://djangorest.pythonanywhere.com${singer.picture}`} title={singer.name} genre={singer.styles[0].title} route={singer.name} />
                  </div>
               ))}
         </div>
      </div>
   );
}
