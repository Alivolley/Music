import Home from "./Components/Home/Home";
import ChosenSong from "./Components/ChosenSong/ChosenSong";
import AllSongs from "./Components/AllSongs/AllSongs";
import Login from "./Components/Login/Login";
import Genres from "./Components/Genres/Genres";
import Singers from "./Components/Singers/Singers";
import ChosenSinger from "./Components/ChosenSinger/ChosenSinger";
import Register from "./Components/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Search from "./Components/Search/Search";
import NoURL from "./Components/NoURL/NoURL";

export let routes = [
   { path: "/", element: <Home /> },
   { path: "/login", element: <Login /> },
   { path: "/register", element: <Register /> },
   { path: "/allSongs", element: <AllSongs /> },
   { path: "/dashboard", element: <Dashboard /> },
   { path: "/singers", element: <Singers /> },
   { path: "/song/:id", element: <ChosenSong /> },
   { path: "/genres/:genre", element: <Genres /> },
   { path: "/singers/:singer", element: <ChosenSinger /> },
   { path: "/search/:title", element: <Search /> },
   { path: "*", element: <NoURL /> },
];
