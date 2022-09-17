import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
   const [usernameValue, setUsernameValue] = useState("");
   const [emailValue, setEmailValue] = useState("");
   const [passwordValue, setPasswordValue] = useState("");
   const [confirmValue, setConfirmValue] = useState("");
   const [showPass, setShowPass] = useState(false);
   const [notValidEmail, setNotValidEmail] = useState(false);
   const [notValidPass, setNotValidPass] = useState(false);

   let pattern = /[a-z0-9]+@[a-z]{5,6}\.[a-z]{2,3}/g;

   const changevisibilty = () => {
      setShowPass((prev) => !prev);
   };

   const checkForm = (e) => {
      e.preventDefault();
      let validateEmail = pattern.test(emailValue);
      !validateEmail ? setNotValidEmail(true) : setNotValidEmail(false);
      console.log(validateEmail);
      passwordValue !== confirmValue ? setNotValidPass(true) : setNotValidPass(false);
   };

   return (
      <div className="register container">
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
