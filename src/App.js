import React from "react";
import ReactRouter from "./ReactRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
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
      <BrowserRouter>
        <ReactRouter />
      <SimpleBottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
