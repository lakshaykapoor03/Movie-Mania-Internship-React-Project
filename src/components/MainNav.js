import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function SimpleBottomNavigation() {
  // const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    // setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  // const navigate= useNavigate();

  // const movies=()=>
  //   navigate("/movies")

  // const trending=()=>
  //   navigate("/");

  // const search=()=>
  //   navigate("/search");

  // const series=()=>
  //   navigate("/series");

  const [value, setValue] = React.useState(0);
  useEffect(() => {}, [value]);

  return (
    <div className="z-50 w-[100vw] h-[50px] fixed bottom-0 bg-[white] text-[#000]">
      <Box sx={{}}>
        <div className="flex justify-around items-center">
          <NavLink to="/" style={({isActive}) => ({
                backgroundColor: isActive ? "#72727299" : "",
                color: isActive ? "black" : "",
              })}>
            <div className="flex flex-col">
              <div>
                <BottomNavigationAction icon={<WhatshotIcon />} />
              </div>
              <div className="text-center">Trending</div>
            </div>
          </NavLink>
          <NavLink to="/movies" style={({isActive}) => ({
                backgroundColor: isActive ? "#72727299" : "",
                color: isActive ? "black" : "",
              })}>
            <div
              
              onClick={handleClick}
              className="flex flex-col"
            >
              <div>
                <BottomNavigationAction icon={<MovieIcon />} />
              </div> 

              <div className="text-center">Movies</div>
            </div>
          </NavLink >
          <NavLink style={({isActive}) => ({
                backgroundColor: isActive ? "#72727299" : "",
                color: isActive ? "black" : "",
              })} to="/series">
            <BottomNavigationAction icon={<TvIcon />} />
            <div className="text-center">TV</div>

          </NavLink>
          <NavLink style={({isActive}) => ({
                backgroundColor: isActive ? "#72727299" : "",
                color: isActive ? "black" : "",
              })} to="/search">
            <BottomNavigationAction icon={<SearchIcon/>} />
            <div className="text-center">Search</div>
          </NavLink>
        </div>
      </Box>
    </div>
  );
}
