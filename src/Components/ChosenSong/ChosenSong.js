import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import "./ChosenSong.css";
import { Link, useParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Loading from "../Loading/Loading";
import ConectFaild from "../ConectFaild/ConnectFaild";

export default function ChosenSong() {
   const [mainSong, setMainSong] = useState();
   const [mainSongPic, setMainSongPic] = useState();
   const [sameGenre, setSameGenre] = useState();
   const [mainSongFile, setMainSongFile] = useState();
   const [options, setOptions] = useState();
   const [playerPic, setPlayerPic] = useState();
   const [connectFaild, setConectFaild] = useState(false);
   const [reload, setReload] = useState(false);

   let params = useParams();

   useEffect(() => {
      fetch(`https://djangorest.pythonanywhere.com/detail/${params.id}/`)
         .then((result) => result.json())
         .then((res) => {
            setMainSongPic(`linear-gradient(90deg, rgba(13, 13, 13, 0.3) 50%, rgba(13, 13, 13, 0.3) 100%),url(https://djangorest.pythonanywhere.com${res.avatar})`);
            setMainSongFile(`https://djangorest.pythonanywhere.com${res.file}`);
            setMainSong(res);
            setPlayerPic(`https://djangorest.pythonanywhere.com${res.avatar}`);
         })
         .catch((err) => setConectFaild(true));
   }, []);

   useEffect(() => {
      mainSong &&
         fetch("https://djangorest.pythonanywhere.com/all-musics/")
            .then((result) => result.json())
            .then((res) => {
               mainSong && setOptions([{ musicSrc: mainSongFile, cover: playerPic }]);
               setSameGenre(res.filter((data) => data.style.title === mainSong.style.title).filter((data) => data.title !== mainSong.title));
            })
            .catch((err) => setConectFaild(true));
   }, [mainSong]);

   return (
      <div className="chosensong container">
         {!mainSong && !connectFaild && <Loading change={true} />}
         {connectFaild && <ConectFaild />}

         {mainSong && (
            <div className="row">
               <ReactJkMusicPlayer audioLists={options} autoPlay={false} toggleMode={false} mode="full" />
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
                           <button className="chosensong-favorite">Add to favorite</button>
                           <Link to={`/singers/${mainSong.singer.name}`} className="chosensong-favorite">
                              Go to singer's page
                           </Link>
                        </div>
                     </div>
                     <div className="col-12 col-md-6">
                        <div className="chosensong-pic" style={{ backgroundImage: mainSongPic }}></div>
                     </div>
                  </div>
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
