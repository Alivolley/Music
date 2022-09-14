import React, { useEffect, useRef, useState } from "react";
import "./ChosenSong.css";
import { FaVolumeUp } from "react-icons/fa";
import { RiArrowGoBackLine, RiArrowGoForwardFill } from "react-icons/ri";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ChosenSong() {
   const chosenSong = useRef();
   const chosenSongRange = useRef();
   const volumeRange = useRef();
   const [songDuration, setSongDuration] = useState(0);
   const [songCurrent, setSongCurrent] = useState(0);
   const [songVolume, setSongVolume] = useState(80);
   const [mainSong, setMainSong] = useState();

   useEffect(() => {
      fetch("https://djangorest.pythonanywhere.com/detail/Elaheye Naz/")
         .then((result) => result.json())
         .then((res) => {
            setMainSong(`https://djangorest.pythonanywhere.com${res.file}`);
            console.log(res);
         })
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      chosenSongRange.current.style.setProperty("--completed-area", `${(chosenSongRange.current.value / songDuration) * 100}%`);
   }, [songCurrent, songDuration]);

   useEffect(() => {
      volumeRange.current.style.setProperty("--completed-vol", `${volumeRange.current.value}%`);
      chosenSong.current.volume = songVolume / 100;
   }, [songVolume]);

   const songTimeHandler = (time) => {
      let minute = Math.floor(time / 60);
      let returnMinute = minute < 10 ? `0${minute}` : minute;
      let second = Math.floor(time % 60);
      let returnSecond = second < 10 ? `0${second}` : second;
      return `${returnMinute}:${returnSecond}`;
   };

   const onloadHandler = () => {
      setSongDuration(Math.floor(chosenSong.current.duration));
      chosenSong.current.volume = songVolume / 100;
   };

   const songPlayHandler = () => {
      chosenSong.current.volume = songVolume / 100;
      setInterval(() => {
         setSongCurrent(chosenSong.current.currentTime);
      }, 1000);
   };

   const rangeChangeHandler = (e) => {
      chosenSongRange.current.style.setProperty("--any", `${(e.target.value / songDuration) * 100}%`);
      chosenSong.current.currentTime = e.target.value;
      setSongCurrent(e.target.value);
   };

   const nextPervHandler = (val) => {
      if (val === "prev") {
         chosenSong.current.currentTime = Number(chosenSong.current.currentTime) - 10;
         setSongCurrent(chosenSong.current.currentTime);
      } else {
         chosenSong.current.currentTime = Number(chosenSong.current.currentTime) + 10;
         setSongCurrent(chosenSong.current.currentTime);
      }
   };

   return (
      <div className="chosensong container">
         <div className="row">
            <div className="col-12 col-lg-8">
               <div
                  className="chosensong-song"
                  style={{ backgroundImage: "linear-gradient(90deg, rgba(13, 13, 13, 0.96) 36%, rgba(13, 13, 13, 0.363) 100%),url(/pics/taylor.jpg)" }}
               >
                  <p className="chosensong-song__tiltle">Gorgeous</p>
                  <p className="chosensong-song__artist">Artist : Taylor Swift</p>
                  <p className="chosensong-song__album">Album : Reputation</p>
               </div>
               <div className="chosensong-song__lenght">
                  <p className="chosensong-song__lenght-start">{songTimeHandler(songCurrent)}</p>
                  <audio src={mainSong} ref={chosenSong} onLoadedMetadata={onloadHandler} onPlay={songPlayHandler}></audio>
                  <input
                     type="range"
                     className="chosensong-song__range"
                     ref={chosenSongRange}
                     min="0"
                     max={songDuration}
                     value={songCurrent}
                     onChange={(e) => rangeChangeHandler(e)}
                  />
                  <p className="chosensong-song__lenght-now">{songTimeHandler(songDuration)} </p>
               </div>
               <div className="chosensong-contolers">
                  <button className="contolers-prev" onClick={() => nextPervHandler("prev")}>
                     <RiArrowGoBackLine />
                  </button>
                  <button
                     className="contolers-pause"
                     onClick={() => {
                        chosenSong.current.pause();
                     }}
                  >
                     <BsFillPauseFill />
                  </button>
                  <button className="contolers-play" onClick={() => chosenSong.current.play()}>
                     <BsFillPlayFill />
                  </button>
                  <button className="contolers-next" onClick={() => nextPervHandler("next")}>
                     <RiArrowGoForwardFill />
                  </button>
                  <div className="contolers-volume">
                     <FaVolumeUp className="contolers-volume-icon" />
                     <input
                        title={songVolume}
                        type="range"
                        ref={volumeRange}
                        className="contolers-volume-range"
                        min="0"
                        max="100"
                        value={songVolume}
                        onInput={(e) => setSongVolume(e.target.value)}
                     />
                  </div>
               </div>
            </div>
            <div className="col-12 col-lg-4">
               <div className="chosensong-same">
                  <h2 className="chosensong-same__text">Similar genres</h2>
                  <Link to="/" className="chosensong-same__card">
                     <img src="/pics/1.jpg" alt="" className="chosensong-same__img" />
                     <div className="chosensong-same__info">
                        <p className="chosensong-same__song">I want to break free</p>
                        <p className="chosensong-same__singer">Queen</p>
                     </div>
                  </Link>
                  <Link to="/" className="chosensong-same__card">
                     <img src="/pics/the-score.jpg" alt="" className="chosensong-same__img" />
                     <div className="chosensong-same__info">
                        <p className="chosensong-same__song">Unstoppble</p>
                        <p className="chosensong-same__singer">The Score</p>
                     </div>
                  </Link>
                  <Link to="/" className="chosensong-same__card">
                     <img src="/pics/imagine-dragons.jpg" alt="" className="chosensong-same__img" />
                     <div className="chosensong-same__info">
                        <p className="chosensong-same__song">Beliver</p>
                        <p className="chosensong-same__singer">Imagine dragons</p>
                     </div>
                  </Link>
                  <Link to="/" className="chosensong-same__card">
                     <img src="/pics/queen.jpg" alt="" className="chosensong-same__img" />
                     <div className="chosensong-same__info">
                        <p className="chosensong-same__song">I want to break free</p>
                        <p className="chosensong-same__singer">Queen</p>
                     </div>
                  </Link>
                  <Link to="/" className="chosensong-same__card">
                     <img src="/pics/the-score.jpg" alt="" className="chosensong-same__img" />
                     <div className="chosensong-same__info">
                        <p className="chosensong-same__song">Unstoppble</p>
                        <p className="chosensong-same__singer">The Score</p>
                     </div>
                  </Link>
                  <Link to="/" className="chosensong-same__card">
                     <img src="/pics/3.jpg" alt="" className="chosensong-same__img" />
                     <div className="chosensong-same__info">
                        <p className="chosensong-same__song">Beliver</p>
                        <p className="chosensong-same__singer">Imagine dragons</p>
                     </div>
                  </Link>
                  <Link to="/" className="chosensong-same__view">
                     View all
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
