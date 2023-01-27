// import {React, useState} from 'react'
// import {img_300, unavailable} from "../Config/config"
// import { Badge } from '@mui/material'
// import CustomPagination from "./Pagination/CustomPagination";
// const apiKey = "ad42d50c0ab12bbf3d9862002e45562c";


// const MovieComponent=({title, date, poster, type, voteAverage, overview, voteaverage} )=> {
//   const [page, setPage] = useState(1);
//   const [content, setContent] = useState([]);
//   const[pages, setNumOfPages] = useState();

//   return (
//     <div>
//     {/* <div className="text-[white] w-[300px] bg-[black]">
//       <img className="" src={poster?`${img_300}/${poster}`: unavailable}/>
//        <div>{title}</div>
//        <div className="flex justify-between">
//         <span>{type}</span>
//         <span>{date}</span>
//        </div>
        
//         </div> */}
//         <div className='border-none rounded-[10px] sm: w-[225px]  md:w-[300px] md:h-[450px] lg:h-[450px] border-[2px] bg-[black] text-[white] text-center pt-[10px]   hover:bg-[white] duration-300 hover:text-[black]  '>
//         {/* <Badge className="ml-[200px] mb-[30px] md:ml-[300px] md:mb-[25px] bg-[red]" badgeContent={voteaverage} color={voteaverage>6?"success":"warning"}/> */}
          
//         <img className="w-[200px] h-[300px] md:w-[280px] md:h-[360px] object-cover mx-auto transition duration-150 ease-out hover:ease-in "  src={poster?`${img_300}/${poster}`: unavailable}></img>
//         <h2 className="mt-[10px] text-[20px] whitespace-nowrap text-ellipsis overflow-hidden">{title}</h2>
//         <div className="flex justify-around text-[15px]">
//             <p>{date}</p>
//             <p className="whitespace-nowrap text-ellipsis overflow-hidden">Movie</p>
//         </div>
//         <div className="mb-[200px]">
//       {pages>1 &&  <CustomPagination  setPage={setPage} pages={pages} />}
//       </div>


//     </div>
//         </div>
        
//   )
// }

// export default MovieComponent