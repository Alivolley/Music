import React, { useEffect, useState } from "react";
import "./ChosenSong.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Loading from "../Loading/Loading";
import ConectFaild from "../ConectFaild/ConnectFaild";
import Cookies from "js-cookie";
import Notif from "../Notif/Notif";

export default function ChosenSong() {
   const [mainSong, setMainSong] = useState();
   const [mainSongPic, setMainSongPic] = useState();
   const [sameGenre, setSameGenre] = useState();
   const [connectFaild, setConectFaild] = useState(false);
   const [showNotif, setShowNotife] = useState(false);
   const [notifText, setNotifText] = useState();
   const [isInFavirote, setIsInFavirote] = useState(false);

   let params = useParams();
   let navigation = useNavigate();

   useEffect(() => {
      if (Cookies.get("access")) {
         fetch(`https://djangorest.pythonanywhere.com/detail/${params.id}/`, {
            headers: {
               "Content-Type": "application/json",
               authorization: `Bearer ${Cookies.get("access")}`,
            },
            method: "GET",
         })
            .then((result) => result.json())
            .then((res) => {
               setMainSongPic(`linear-gradient(90deg, rgba(13, 13, 13, 0.3) 50%, rgba(13, 13, 13, 0.3) 100%),url(https://djangorest.pythonanywhere.com${res.avatar})`);
               setMainSong(res);
            })
            .catch((err) => setConectFaild(true));

         fetch("https://djangorest.pythonanywhere.com/accounts/profile/", {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${Cookies.get("access")}`,
            },
            method: "GET",
         })
            .then((res) => res.json())
            .then((data) => {
               let isfavore = data.saves.some((song) => song.music.id === Number(params.id));
               console.log(isfavore);
               isfavore && setIsInFavirote(true);
            })
            .catch((err) => console.log(err));
      } else {
         navigation("/login");
      }
   }, []);

   useEffect(() => {
      mainSong &&
         fetch("https://djangorest.pythonanywhere.com/all-musics/")
            .then((result) => result.json())
            .then((res) => {
               setSameGenre(res.filter((data) => data.style.title === mainSong.style.title).filter((data) => data.title !== mainSong.title));
            })
            .catch((err) => setConectFaild(true));
   }, [mainSong]);

   const toggleSongToFavirote = () => {
      fetch(`https://djangorest.pythonanywhere.com/save/${params.id}/`, {
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookies.get("access")}`,
         },
         method: "GET",
      })
         .then((result) => {
            if (result.status === 200) {
               setShowNotife(true);
               setNotifText("Added successfully");
               setIsInFavirote(true);
            } else if (result.status === 201) {
               setShowNotife(true);
               setNotifText("Removed successfully");
               setIsInFavirote(false);
            }
         })
         .catch((err) => console.log(err));
   };

   const hideNotife = () => {
      setShowNotife(false);
   };

   // console.log(mainSong);

   return (
      <div className="chosensong container">
         {!mainSong && !connectFaild && <Loading change={true} />}
         {connectFaild && <ConectFaild />}

         {mainSong && (
            <div className="row">
               <Notif show={showNotif} onClose={hideNotife} text={notifText} />
               <div className="col-12 col-lg-8">
                  <div className="row chosensong-detail">
                     <div className="col-12 col-md-6">
                        <div className="chosensong-detail__wrapper">
                           <p className="chosensong-detail__label">Name :</p>
                           <p className="chosensong-detail__name">{mainSong.title}</p>
                        </div>
                        <div className="chosensong-detail__wrapper">
                           <p className="chosensong-detail__label">Artist :</p>
                           <p className="chosensong-detail__singer">{mainSong.singer.name}</p>
                        </div>
                        <div className="chosensong-detail__wrapper">
                           <p className="chosensong-detail__label">Genre :</p>
                           <p className="chosensong-detail__genre">{mainSong.style.title}</p>
                        </div>
                        <div className="chosensong-detail__wrapper-lyric">
                           <p className="chosensong-detail__label">Part of lyric :</p>
                           <p className="chosensong-detail__lyric">{mainSong.text} ...</p>
                        </div>
                        <div className="chosensong-detail__wrapper-likes">
                           <p className="chosensong-detail__label">
                              <AiFillHeart className="chosensong-detail__icon" /> Likes :
                           </p>
                           <p className="chosensong-detail__likes">{mainSong.likes}</p>
                        </div>
                        <div className="chosensong-btn__group">
                           <button className="chosensong-favorite" onClick={toggleSongToFavirote}>
                              {isInFavirote ? "Remove from favorite" : "Add to favorite"}
                           </button>
                           <Link to={`/singers/${mainSong.singer.name}`} className="chosensong-favorite">
                              Go to singer's page
                           </Link>
                        </div>
                     </div>
                     <div className="col-12 col-md-6">
                        <div className="chosensong-pic" style={{ backgroundImage: mainSongPic }}></div>
                     </div>
                  </div>
                  <audio className="col-12 chosensong-main-song" src={`https://djangorest.pythonanywhere.com${mainSong.file}`} controls></audio>
               </div>

               <div className="col-12 col-lg-4">
                  <div className="chosensong-same">
                     <h2 className="chosensong-same__text">Similar genres</h2>
                     {sameGenre &&
                        sameGenre.map(
                           (song, index) =>
                              index < 6 && (
                                 <a key={song.id} href={`/song/${song.id}`} className="chosensong-same__card">
                                    <img src={`https://djangorest.pythonanywhere.com${song.avatar}`} alt="" className="chosensong-same__img" />
                                    <div className="chosensong-same__info">
                                       <p className="chosensong-same__song">{song.title}</p>
                                       <p className="chosensong-same__singer">{song.singer.name}</p>
                                    </div>
                                 </a>
                              )
                        )}
                     <Link className="chosensong-same__view" to={`/genres/${mainSong.style.title}`}>
                        View all
                     </Link>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
