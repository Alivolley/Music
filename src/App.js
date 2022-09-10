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
      </>
   );
}

export default App;
