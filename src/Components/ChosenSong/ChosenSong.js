import React from "react";
import "./ChosenSong.css";
import { FaVolumeUp } from "react-icons/fa";
import { RiArrowGoBackLine, RiArrowGoForwardFill } from "react-icons/ri";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";

export default function ChosenSong() {
   return (
      <div className="chosensong container">
         <div className="row">
            <div className="col-12 col-lg-8">
               <div className="chosensong-song">
                  <p className="chosensong-song__tiltle">Gorgeous</p>
                  <p className="chosensong-song__artist">Artist : Taylor Swift</p>
                  <p className="chosensong-song__album">Album : Reputation</p>
               </div>
               <div className="chosensong-song__lenght">
                  <p className="chosensong-song__lenght-start">00:00</p>
                  <input type="range" className="chosensong-song__range" min="0" max="100" defaultValue="0" />
                  <p className="chosensong-song__lenght-now">03:45</p>
               </div>
               <div className="chosensong-contolers">
                  <button className="contolers-prev">
                     <RiArrowGoBackLine />
                  </button>
                  <button className="contolers-pause">
                     <BsFillPauseFill />
                  </button>
                  <button className="contolers-play">
                     <BsFillPlayFill />
                  </button>
                  <button className="contolers-next">
                     <RiArrowGoForwardFill />
                  </button>
                  <div className="contolers-volume">
                     <FaVolumeUp className="contolers-volume-icon" />
                     <input type="range" className="contolers-volume-range" min="0" max="100" defaultValue="100" />
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
