import Home from "./Components/Home/Home";
import ChosenSong from "./Components/ChosenSong/ChosenSong";

export let routes = [
   { path: "/", element: <Home /> },
   { path: "/song/:id", element: <ChosenSong></ChosenSong> },
];
