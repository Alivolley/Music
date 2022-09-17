import React, { useState } from "react";
import "./Login.css";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbAlertOctagon } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Login() {
   const [showPass, setShowPass] = useState(false);
   const [notValid, setNotValid] = useState(false);
   const [emailValue, setEmailValue] = useState("");
   const [passwordValue, setPasswordValue] = useState("");

   let pattern = /[a-z0-9]+@[a-z]{5,6}\.[a-z]{2,3}/g;

   const changevisibilty = () => {
      setShowPass((prev) => !prev);
   };

   const checkForm = (e) => {
      e.preventDefault();
      let validateEmail = pattern.test(emailValue);
      console.log(validateEmail);
      !validateEmail ? setNotValid(true) : setNotValid(false);
   };

   return (
      <div className="login container">
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
