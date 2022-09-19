import React, { useState } from "react";
import "./Login.css";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbAlertOctagon } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import Cookies from "js-cookie";
import ModalComp from "../ModalComp/ModalComp";
import Loading from "../Loading/Loading";

export default function Login() {
   const [showPass, setShowPass] = useState(false);
   const [notValid, setNotValid] = useState(false);
   const [emailValue, setEmailValue] = useState("");
   const [passwordValue, setPasswordValue] = useState("");
   const [showModal, setShowModal] = useState(false);
   const [modalText, setModalText] = useState();

   let navigation = useNavigate();

   const changevisibilty = () => {
      setShowPass((prev) => !prev);
   };

   const checkForm = (e) => {
      e.preventDefault();
      let pattern = /[a-z0-9]+@[a-z]{5,6}\.[a-z]{2,3}/g;
      let validateEmail = pattern.test(emailValue);
      !validateEmail ? setNotValid(true) : setNotValid(false);
      if (validateEmail && passwordValue) {
         setModalText(<Loading change={true} />);
         setShowModal(true);
         let usernameInfo = { email: emailValue, password: passwordValue };
         fetch("https://djangorest.pythonanywhere.com/accounts/login/", {
            headers: {
               "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(usernameInfo),
         })
            .then((res) => {
               if (res.status === 200) {
                  return res.json();
               } else {
                  setModalText("!!! Password or Email is wrong .");
               }
            })
            .then((data) => {
               Cookies.set("refresh", data.refresh, { expires: 1 });
               Cookies.set("access", data.access, { expires: 1 });
               setModalText("You logged in successfully :)");

               setTimeout(() => {
                  navigation("/");
               }, 1500);
            })
            .catch((err) => setModalText("!!! Password or Email is wrong ."));
      }
   };

   const closeModal = () => {
      setShowModal(false);
   };

   return (
      <div className="login container">
         <ModalComp show={showModal} text={modalText} closeModal={closeModal} />

         <h2 className="login-title">
            <TbAlertOctagon className="login-title__icon" /> You need to login first to access :
         </h2>
         <AiOutlineUser className="login-icon" />
         <form action="" className="login-form" onSubmit={checkForm}>
            <div className="login-email__wrapper">
               <MdOutlineEmail className="login-email__icon" />
               <input type="text" className="login-email__input" placeholder="Email" value={emailValue.toLowerCase()} onChange={(e) => setEmailValue(e.target.value)} />
            </div>
            <div className="login-password__wrapper">
               <RiLockPasswordLine className="login-password__icon" />
               <input
                  type={`${showPass ? "text" : "password"}`}
                  className="login-password__input"
                  placeholder="Password"
                  maxLength="8"
                  value={passwordValue.toLowerCase()}
                  onChange={(e) => setPasswordValue(e.target.value)}
               />
               {showPass ? (
                  <AiOutlineEye className="login-password-visiblity" onClick={changevisibilty} />
               ) : (
                  <AiOutlineEyeInvisible className="login-password-visiblity" onClick={changevisibilty} />
               )}
            </div>
            {notValid && <p className="login-valid-messege">! Insert a valid email</p>}
            <input type="submit" className="login-btn" value="Login" />
         </form>
         <Link to="/register" className="login-goRegister">
            Not a user ? Register first
         </Link>
      </div>
   );
}
