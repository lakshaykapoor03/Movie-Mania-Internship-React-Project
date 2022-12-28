import React from 'react'
import {img_300, unavailable} from "../Config/config"
import { Badge } from '@mui/material'
import ContentModal from './ContentModal/ContentModal'

const SingleContent=({title, date, poster, type, voteAverage, overview, id} )=> {
  return (
    <ContentModal type={type} id={id} >
    {/* <div className="text-[white] w-[300px] bg-[black]">
      <img className="" src={poster?`${img_300}/${poster}`: unavailable}/>
       <div>{title}</div>
       <div className="flex justify-between">
        <span>{type}</span>
        <span>{date}</span>
       </div>
        
        </div> */}
        <div className='border-none rounded-[10px] sm: w-[225px]  md:w-[300px] md:h-[450px] lg:h-[450px] border-[2px] bg-[black] text-[white] text-center pt-[10px]   hover:bg-[white] duration-300 hover:text-[black]  '>
        <Badge className="ml-[200px] mb-[30px] md:ml-[300px] md:mb-[25px] bg-[red]" badgeContent={voteAverage} color={voteAverage>6?"success":"warning"}/>
          
        <img className="w-[200px] h-[300px] md:w-[280px] md:h-[360px] object-cover mx-auto transition duration-150 ease-out hover:ease-in "  src={poster?`${img_300}/${poster}`: unavailable}></img>
        <h2 className="mt-[10px] whitespace-nowrap text-ellipsis overflow-hidden">{title}</h2>
        <div className="flex justify-around">
            <p>Date:{date}</p>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden">Type:{type}</p>
        </div>

    </div>
        </ContentModal>
        
  )
}

export default SingleContent