import {React,useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
    img_300,
    img_500,
    unavailable,
    unavailableLandscape,
  } from "../../Config/config";
// import { useState } from 'react';
import axios from 'axios';


const handleDragStart = (e) => e.preventDefault();


const apiKey = "ad42d50c0ab12bbf3d9862002e45562c";
const Carousel = ({type, id}) => {
const [credits, setCredits]= useState()

const items = credits?.map((c)=>(
    <div className="">
        <img src={c.profile_path? `${img_300}/${c.profile_path}`: unavailable} alt={c.name} onDragStart={handleDragStart} className="flex flex-wrap ml-[25%] w-[200px] self-center rounded-[15px]" />
        <p className="mt-[15px]">{c?.name}</p>
    </div>
))

const fetchCredits=async()=>{
const response= await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}&language=en-US`)
console.log(response)
setCredits(response.data.cast)

}

useEffect(() => {
    fetchCredits()
    
  }, []);

  return (
    <AliceCarousel autoPlay infinite  disableDotsControls mouseTracking items={items} />
  );
}

export default Carousel;
