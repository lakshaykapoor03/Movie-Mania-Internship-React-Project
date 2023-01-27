import React from "react";
import ReactRouter from "./ReactRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Shimmer from "./components/Shimmer";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Outlet } from "react-router-dom";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Trending from "./Pages/Trending/Trending";
import Series from "./Pages/Series/Series";

// import axios from "axios";

// function Trending() {
//   const fetchTrending= async()=>{
//   const {data}= await axios.get("https://api.themoviedb.org/3/movie/550?api_key=ad42d50c0ab12bbf3d9862002e45562c")
//   console.log(data)
// }
// fetchTrending()
// }

// Trending()

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      <SimpleBottomNavigation />

    </div>
  );
}

export default App;

export const appRouter= createBrowserRouter([
 { path:"/",
 element:<App/>,
 children:[
  {
    path:"/",
    element:<Trending/>
  },
  {
    path:"/movies",
    element:<Movies/>
  },
  {
    path:"/series",
    element:<Series/>
  },
  {
    path:"/search",
    element:<Search/>
  }
 ]
 }
])
