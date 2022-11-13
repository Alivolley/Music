import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { routes } from "./Routes";

function App() {
   const router = useRoutes(routes);

   return (
      <>
         <Header />
         {router}
         <Footer />

         {/* <div className="contact-btn">
            <IoMdContacts className="contact-btn__icon" />
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
         </div> */}
      </>
   );
}

export default App;
