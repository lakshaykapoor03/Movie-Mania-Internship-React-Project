import React from 'react'

function Header() {
  return (
    <div onClick={()=> window.scroll(0,0)} className="sticky top-0 text-[3.5vw] text-[white] bg-[#000] py-[5px] text-center  w-[100vw] z-50 shadow-lg shadow-slate-500/60 cursor-pointer scroll-smooth ">
        Movie Mania
    </div>
  )
}

export default Header