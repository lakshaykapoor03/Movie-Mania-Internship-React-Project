import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';



export default function SimpleBottomNavigation() {
  const navigate= useNavigate();

  const movies=()=>
    navigate("/movies")
   
  const trending=()=>
    navigate("/");
  
  const search=()=>
    navigate("/search");
  
  
  const series=()=>
    navigate("/series");
  
  
  
    const [value, setValue] = React.useState(0);
   useEffect(()=>{
       
    },[value])

  return (
    <div className="z-50 w-[100vw] fixed bottom-0 bg-[blue]">
    <Box sx={{  }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={trending}  label="Trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction onClick={movies} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction onClick={series} label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction onClick={search} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
    </div>
  );
}
