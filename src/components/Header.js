import React from 'react'
import { movieLogo } from '../Config/config'

function Header() {
  return (
    <div onClick={()=> window.scroll(0,0)} className=" flex justify-center  sticky top-0 text-[3.5vw] text-[white] bg-[#000] py-[5px] text-center  w-[100vw] z-50 shadow-lg shadow-slate-500/60 cursor-pointer scroll-smooth ">
    <span className="w-[20px] sm:w-[40px] md:w-[50px] lg:w-[70px]">  <img  src={movieLogo} alt="" srcset="" /> </span>
        <span className="m-1">Movie Mania</span>
    </div>
  )
}

export default Header