import Home from "./Components/Home/Home";
import ChosenSong from "./Components/ChosenSong/ChosenSong";
import AllSongs from "./Components/AllSongs/AllSongs";
import Login from "./Components/Login/Login";
export let routes = [
   { path: "/", element: <Home /> },
   { path: "/song/:id", element: <ChosenSong></ChosenSong> },
   { path: "/allSongs", element: <AllSongs></AllSongs> },
   { path: "/login", element: <Login></Login> },
];
