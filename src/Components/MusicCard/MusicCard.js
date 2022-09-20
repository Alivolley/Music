import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MusicCard.css";
import { BiPlayCircle } from "react-icons/bi";
import Cookies from "js-cookie";

export default function MusicCard({ img, title, singer, route }) {
   const [liked, setLiked] = useState(false);

   let navigation = useNavigate();

   useEffect(() => {
      fetch("https://djangorest.pythonanywhere.com/accounts/profile/", {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("access")}`,
         },
         method: "GET",
      })
         .then((res) => res.json())
         .then((data) => {
            let isLiked = data.likes.some((song) => song.music.id === route);
            isLiked && setLiked(true);
         })
         .catch((err) => console.log(err));
   }, []);

   const addLikeClass = () => {
      if (Cookies.get("access")) {
         fetch(`https://djangorest.pythonanywhere.com/like/${route}/`, {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${Cookies.get("access")}`,
            },
            method: "GET",
         })
            .then((res) => {
               res.status === 200 && setLiked(true);
            })
            .catch((err) => console.log(err));
      } else {
         navigation("/login");
      }
      setLiked((prev) => !prev);
   };

   return (
      <>
         <div className="musicCard">
            <svg
               onClick={addLikeClass}
               className={`musicCard__icon ${liked ? "musicCard__icon--like" : ""}`}
               xmlns="http://www.w3.org/2000/svg"
               width="28"
               height="28"
               viewBox="0 0 24.037 24.037"
            >
               <path
                  id="Path_955"
                  data-name="Path 955"
                  d="M15.822,8.979v.029H4V-2.1A5.915,5.915,0,0,1,9.912-7.841a5.913,5.913,0,0,1,5.849,5.049,5.912,5.912,0,0,1,.061,11.772Z"
                  transform="translate(2.716 20.496) rotate(-45)"
               ></path>
            </svg>
            <img className="musicCard-img" src={img} alt="" />
            <p className="musicCard-title">{title}</p>
            <p className="musicCard-artist">{singer}</p>
            <Link to={`/song/${route}`} className="musicCard-btn">
               play
               <BiPlayCircle className="musicCard-btn__icon" />
            </Link>
         </div>
      </>
   );
}
