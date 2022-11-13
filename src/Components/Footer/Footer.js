import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { TbArrowTopTail } from "react-icons/tb";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoMdContacts } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { FcPhoneAndroid } from "react-icons/fc";
import "./Footer.css";

export default function Footer() {
   const StickToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <div className="footer">
         <div className="container">
            <span className="go-top" onClick={StickToTop}>
               Go top <TbArrowTopTail />
            </span>
            <div className="footer-main row">
               <ul className="footer-fast-access col-md-6">
                  <Link to="/" className="footer-fast-access__item">
                     Home
                  </Link>
                  <Link to="/dashboard" className="footer-fast-access__item">
                     My library
                  </Link>
                  <Link to="/allSongs" className="footer-fast-access__item">
                     Songs
                  </Link>
               </ul>
               <div className="footer-contact col-md-6">
                  <p className="footer-contact-desc">Contact us with this ways</p>
                  <ul className="footer-contact__link-wrapper">
                     <Link to="/" className="footer-contact__link footer-contact__link-telegram">
                        <BsTelegram className="footer-contact__icon"></BsTelegram>
                     </Link>
                     <Link to="/" className="footer-contact__link footer-contact__link-whatsapp">
                        <BsWhatsapp className="footer-contact__icon"></BsWhatsapp>
                     </Link>
                     <Link to="/" className="footer-contact__link footer-contact__link-instagram">
                        <AiFillInstagram className="footer-contact__icon"></AiFillInstagram>
                     </Link>
                     <Link to="/" className="footer-contact__link footer-contact__link-twitter">
                        <FaTwitter className="footer-contact__icon"></FaTwitter>
                     </Link>
                  </ul>
               </div>
            </div>

            <div className="contact-modal">
               <div className="contact-modal__front">
                  <p className="contact-modal__title">Frontend Developer</p>
                  <p className="contact-modal__item">Ali Azghandi</p>
                  <p className="contact-modal__item">
                     <SiTelegram className="contact-modal__icon" />
                     @Alivolley
                  </p>
                  <p className="contact-modal__item">
                     <FcPhoneAndroid className="contact-modal__icon" />
                     09383935719
                  </p>
                  <p className="contact-modal__item contact-modal__item--email">
                     <CgMail className="contact-modal__icon" />
                     alicryptovolley@gmail.com
                  </p>
               </div>

               <div className="contact-modal__back">
                  <p className="contact-modal__title">Backend Developer</p>
                  <p className="contact-modal__item">Javad Najari</p>
                  <p className="contact-modal__item">
                     <SiTelegram className="contact-modal__icon" />
                     @J_N_1998
                  </p>
                  <p className="contact-modal__item">
                     <FcPhoneAndroid className="contact-modal__icon" />
                     09928721882
                  </p>
                  <p className="contact-modal__item contact-modal__item--email">
                     <CgMail className="contact-modal__icon" />
                     javad.programmer100@gmail.com
                  </p>
               </div>
            </div>

            <div className="footer-copy-right">© 2020. All rights reserved.</div>
         </div>
      </div>
   );
}
