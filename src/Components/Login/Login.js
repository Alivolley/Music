import React from "react";
import "./Login.css";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbAlertOctagon } from "react-icons/tb";

export default function Login() {
   return (
      <div className="login container">
         <h2 className="login-title">
            <TbAlertOctagon className="login-title__icon" /> You need to login first to access the player :
         </h2>
         <AiOutlineUser className="login-icon" />
         <div className="login-email__wrapper">
            <MdOutlineEmail className="login-email__icon" />
            <input type="text" className="login-email__input" placeholder="Email" />
         </div>
         <div className="login-password__wrapper">
            <RiLockPasswordLine className="login-password__icon" />
            <input type="password" className="login-password__input" placeholder="Password" />
         </div>
         <button className="login-btn">Login</button>
      </div>
   );
}
