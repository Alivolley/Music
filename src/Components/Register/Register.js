import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Register.css";
import ModalComp from "../ModalComp/ModalComp";
import Loading from "../Loading/Loading";

export default function Register() {
   const [usernameValue, setUsernameValue] = useState("");
   const [emailValue, setEmailValue] = useState("");
   const [passwordValue, setPasswordValue] = useState("");
   const [confirmValue, setConfirmValue] = useState("");
   const [showPass, setShowPass] = useState(false);
   const [notValidEmail, setNotValidEmail] = useState(false);
   const [notValidPass, setNotValidPass] = useState(false);
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
      !validateEmail ? setNotValidEmail(true) : setNotValidEmail(false);
      passwordValue !== confirmValue ? setNotValidPass(true) : setNotValidPass(false);
      if (validateEmail && passwordValue && confirmValue && passwordValue === confirmValue && usernameValue) {
         setModalText(<Loading change={true} />);
         setShowModal(true);
         let usernameInfo = { username: usernameValue, email: emailValue, password: passwordValue, password2: passwordValue };
         fetch("https://djangorest.pythonanywhere.com/accounts/register/", {
            headers: {
               "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(usernameInfo),
         })
            .then((res) => {
               if (res.statusText === "Created") {
                  setModalText("You regitered successfully :) . Now you must login");
                  setTimeout(() => {
                     navigation("/login");
                  }, 2000);
               } else if (res.statusText === "Conflict") {
                  setModalText("!!! A user exist with this information");
               } else {
                  setModalText("!!! error occurred");
               }
            })
            .catch((err) => {
               if (err.statusText === "Conflict") {
                  setModalText("!!! A user exist with this information");
               } else {
                  setModalText("!!! error occurred");
               }
            });
      }
   };

   const closeModal = () => {
      setShowModal(false);
   };

   return (
      <div className="register container">
         <ModalComp show={showModal} text={modalText} closeModal={closeModal} />

         <AiOutlineUser className="register-icon" />
         <form action="" className="register-form" onSubmit={checkForm}>
            <div className="register-username__wrapper">
               <BiUserPin className="register-username__icon" />
               <input
                  type="text"
                  className="register-username__input"
                  placeholder="Username"
                  maxLength="10"
                  value={usernameValue.toLowerCase()}
                  onChange={(e) => setUsernameValue(e.target.value)}
               />
            </div>
            <div className="register-email__wrapper">
               <MdOutlineEmail className="register-email__icon" />
               <input
                  type="text"
                  className="register-email__input"
                  placeholder="Email"
                  value={emailValue.toLowerCase()}
                  onChange={(e) => setEmailValue(e.target.value)}
               />
            </div>
            <div className="register-password__wrapper">
               <RiLockPasswordLine className="register-password__icon" />
               <input
                  type={`${showPass ? "text" : "password"}`}
                  className="register-password__input"
                  placeholder="Password"
                  maxLength="8"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
               />
            </div>
            <div className="register-confirm__wrapper">
               <GiConfirmed className="register-confirm__icon" />
               <input
                  type={`${showPass ? "text" : "password"}`}
                  className="register-confirm__input"
                  placeholder="Confirm password"
                  maxLength="8"
                  value={confirmValue}
                  onChange={(e) => setConfirmValue(e.target.value)}
               />
               {showPass ? (
                  <AiOutlineEye className="register-password-visiblity" onClick={changevisibilty} />
               ) : (
                  <AiOutlineEyeInvisible className="register-password-visiblity" onClick={changevisibilty} />
               )}
            </div>
            {notValidEmail && <p className="register-valid__email-messege">! Insert a valid email</p>}
            {notValidPass && <p className="register-valid__password-messege">! Passwords are not matched</p>}
            <input type="submit" className="register-btn" value="Register" />
         </form>
         <Link to="/login" className="register-goRegister">
            Already a user ? Login
         </Link>
      </div>
   );
}
