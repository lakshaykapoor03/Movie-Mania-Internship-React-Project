import { React, useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent";
import Genre from "../../components/Genre";
import useGenre from "../../hooks/useGenre"
import Shimmer from "../../components/Shimmer";



function Series() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const[numOfPages, setNumOfPages] = useState();
  const[selectedGenres, setSelectedGenres]= useState([])
  const[genres, setGenres] = useState([])
  const genreforURL= useGenre(selectedGenres)



  const fetchMovies = async () => {
    const movieData = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=ad42d50c0ab12bbf3d9862002e45562c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page= ${page}&with_genres=${genreforURL}`
    );
    console.log(movieData);
    setContent(movieData.data.results);
    setNumOfPages(movieData.data.total_pages)
  };

  useEffect(() => {
    fetchMovies();
  }, [page,genreforURL]);

  {if(content.length===0){
    return(
    <Shimmer/>
    )
  }}

  return( 
  <>
  <div className="w-[100%] mx-[4%]">
      <div className="text-[white] text-[5vw] text-center">Tv Series</div>
      <Genre type="movie" selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} setPage={setPage} />
      <div className=" container mx-[auto] flex flex-wrap justify-around w-[100%]">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date||c.release_date}
              voteAverage={c.vote_average}
              overView={c.overview}
              type={"tv"}
              voteaverage={c.vote_average}

            />
          ))}
      </div>
      {numOfPages>1 &&  <CustomPagination setPage={setPage} numOfPages={numOfPages} />}
     

    </div>
  {/* {content && content.map((movie)=>(movie))} */}
  </>
  )
}

export default Series;
