import Home from "./Components/Home/Home";
import ChosenSong from "./Components/ChosenSong/ChosenSong";
import AllSongs from "./Components/AllSongs/AllSongs";
import Login from "./Components/Login/Login";
import Genres from "./Components/Genres/Genres";
import Singers from "./Components/Singers/Singers";
import ChosenSinger from "./Components/ChosenSinger/ChosenSinger";
import Register from "./Components/Register/Register";

export let routes = [
   { path: "/", element: <Home /> },
   { path: "/login", element: <Login></Login> },
   { path: "/register", element: <Register></Register> },
   { path: "/allSongs", element: <AllSongs></AllSongs> },
   { path: "/song/:id", element: <ChosenSong></ChosenSong> },
   { path: "/genres/:genre", element: <Genres></Genres> },
   { path: "/singers", element: <Singers></Singers> },
   { path: "/singers/:singer", element: <ChosenSinger></ChosenSinger> },
];
