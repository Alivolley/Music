import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Table from "react-bootstrap/Table";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loading from "../Loading/Loading";
import ConectFaild from "../ConectFaild/ConnectFaild";
import MusicCard from "../MusicCard/MusicCard";

export default function Dashboard() {
   const [profile, setProfile] = useState();
   const [connectFaild, setConectFaild] = useState(false);
   const [reload, setReload] = useState(false);

   let navigation = useNavigate();
   let location = useLocation();

   useEffect(() => {
      if (Cookies.get("access")) {
         fetch(`https://djangorest.pythonanywhere.com/accounts/profile/`, {
            headers: {
               "Content-Type": "application/json",
               authorization: `Bearer ${Cookies.get("access")}`,
            },
            method: "GET",
         })
            .then((result) => {
               return result.status === 200 && result.json();
            })
            .then((data) => setProfile(data))
            .catch((err) => setConectFaild(true));
      } else {
         navigation("/login", {
            replace: true,
            state: { from: location },
         });
      }
   }, []);

   useEffect(() => {
      !Cookies.get("access") && navigation("/login");
      fetch(`https://djangorest.pythonanywhere.com/accounts/profile/`, {
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookies.get("access")}`,
         },
         method: "GET",
      })
         .then((result) => {
            return result.status === 200 && result.json();
         })
         .then((data) => setProfile(data))
         .catch((err) => setConectFaild(true));
   }, [reload]);

   const removeFavirote = (songID) => {
      fetch(`https://djangorest.pythonanywhere.com/save/${songID}/`, {
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookies.get("access")}`,
         },
         method: "GET",
      })
         .then((result) => {
            result.status === 201 && setReload((prev) => !prev);
         })
         .catch((err) => console.log(err));
   };

   const clearFavirotes = () => {
      fetch("https://djangorest.pythonanywhere.com/accounts/remove-saves/", {
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookies.get("access")}`,
         },
         method: "GET",
      })
         .then((res) => res.status === 200 && setReload((prev) => !prev))
         .catch((err) => console.log(err));
   };

   const clearLikes = () => {
      fetch("https://djangorest.pythonanywhere.com/accounts/remove-likes/", {
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookies.get("access")}`,
         },
         method: "GET",
      })
         .then((res) => res.status === 200 && setReload((prev) => !prev))
         .catch((err) => console.log(err));
   };

   return (
      <div className="dashboard">
         <div className="container">
            {!profile && !connectFaild && <Loading change={true} />}
            {connectFaild && <ConectFaild />}

            {profile && (
               <>
                  <div className="dashboard-top">
                     <div className="user-details">
                        <h2 className="user-details__title">Wellcome {profile.username}</h2>
                        <div className="user-details__email-wrpper">
                           <p className="user-details__email-label">Email :</p>
                           <p className="user-details__email-main">{profile.email}</p>
                        </div>
                        <div className="user-details__join-wrpper">
                           <p className="user-details__join-label">You joined at :</p>
                           <p className="user-details__join-main">{profile.date_joined}</p>
                        </div>
                        <button
                           className="user-details-change-pass"
                           onClick={() => {
                              Cookies.remove("access");
                              setReload((prev) => !prev);
                           }}
                        >
                           Log out
                        </button>
                     </div>
                  </div>

                  <div className="dashboard-seperatore-line"></div>

                  <div className="dashboard-favirotes">
                     <div className="favorite-intro-wrapper">
                        <h2 className="favorites-title">Your favorite list</h2>
                        <button className="clear-favorite" onClick={clearFavirotes}>
                           Clear list
                        </button>
                     </div>
                     {profile.saves.length ? (
                        <Table striped bordered hover variant="dark">
                           <thead>
                              <tr>
                                 <th className="favorite-th">#</th>
                                 <th className="favorite-th">Song</th>
                                 <th className="favorite-th">Artist</th>
                                 <th className="favorite-th">Actions</th>
                              </tr>
                           </thead>
                           <tbody>
                              {profile.saves.map((song, index) => (
                                 <tr key={song.music.id}>
                                    <td>{index + 1}</td>
                                    <td>{song.music.singer.name}</td>
                                    <td>{song.music.title}</td>
                                    <td className="favorite-actions">
                                       <button className="favorite-remove" onClick={() => removeFavirote(song.music.id)}>
                                          Remove
                                       </button>
                                       <Link to={`/song/${song.music.id}`} className="favorite-listen">
                                          Listen
                                       </Link>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </Table>
                     ) : (
                        <p className="empty-favorite-likes">You have no favorite song</p>
                     )}
                  </div>

                  <div className="dashboard-seperatore-line"></div>

                  <div className="dashboard-likes">
                     <div className="like-intro-wrapper">
                        <h2 className="like-title">You liked this songs</h2>
                        <button className="clear-like" onClick={clearLikes}>
                           Clear list
                        </button>
                     </div>
                     <div className="row">
                        {profile.likes.length ? (
                           profile.likes.map((song) => (
                              <div key={song.music.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                 <MusicCard
                                    title={song.music.title}
                                    singer={song.music.singer.name}
                                    route={song.music.id}
                                    img={`https://djangorest.pythonanywhere.com${song.music.avatar}`}
                                 />
                              </div>
                           ))
                        ) : (
                           <p className="empty-favorite-likes">You didn't like any song</p>
                        )}
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   );
}
