import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";

function ReactRouter() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
        
      </Routes>

    </div>
  );
}

export default ReactRouter;
