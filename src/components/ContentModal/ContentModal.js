import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Typography from "@mui/material/Typography";
import axios from "axios";
import Carousel from "../carousel/Carousel";

import { useState, useEffect } from "react";
import {
  img_300,
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../Config/config";

const apiKey = "ad42d50c0ab12bbf3d9862002e45562c";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({children, type, id }) {
  
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`
    );
    // console.log(data.data);
    setContent(data.data);
  };

  const fetchVideo = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=en-US`
    );
    // console.log(data.data);
    setVideo(data.data.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
    fetchData();
  }, []);

  return (
    <div >
  
      <Button
        className="className='border-none rounded-[10px] sm: w-[225px]  md:w-[300px] md:h-[450px] lg:h-[450px] border-[2px] bg-[black] text-[white] text-center pt-[10px]   hover:bg-[white] duration-300 hover:text-[black]"
        onClick={handleOpen}
      >
       {children}
      </Button>
      <div  >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
        
              <div className=" flex flex-col  justify-evenly  relative right-[20%]  sm:w-[70vw]  md:h-[90vh] rounded-[10px] bg-[#4d4d4d] text-white mt-[50px] md:ml-[600px] text-center">
               
                {/* <img
                className="portrait"
                alt={content.name || content.title}
                  src={
                    content.poster_path
                      ? `${content.poster_path}`
                      : unavailable
                  }
                /> */}
                <div className="md:flex">
                <img
                className="ml-[45%] h-[200px] md:ml-[0%] self-center  md:h-[300px] rounded-[20px]  object-cover"

                alt={content.name || content.title}
                  src={
                    content.poster_path
                      ? `${img_300}/${content.poster_path}`
                      : unavailable
                  }
                />
                <div className="md:flex md:flex-col md:justify-around md:gap-[20px] text-[14px] md:text-[20px]  md:h-[200px] mt-[30px]">
                <div className="text-white">
                  {content.name|| content.title}
                </div>
                <div className="text-center">
                  {content.tagline && (<i>{content.tagline}</i>)}
                </div>
                <div>
                  {content.overview}
                </div>
                </div>
                </div>
                <div>
                  <Carousel type={type} id={id}/>

                </div>
                <div  >
                <Button 
                variant="contained"
                startIcon={<YouTubeIcon/>}
                color="secondary"
                target="_blank"
                href={`https://www.youtube.com/watch?v=${video}`}>
                  Watch Trailer
                </Button>
                </div>
              </div>
         
          )}
        </Fade>
      </Modal>
      </div>
   
    </div>
  );
}
