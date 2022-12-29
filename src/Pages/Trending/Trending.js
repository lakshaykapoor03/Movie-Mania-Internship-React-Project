import { React, useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

function Trending() {
  const[page, setPage] = useState(1);

  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=ad42d50c0ab12bbf3d9862002e45562c&page=${page}`
    );
    console.log(data.results);
    setContent(data.results);
   
  };

  useEffect(() => {
    window.scroll(0,0)
    fetchTrending();
  }, [page]);

  return (
    <div className="w-[100%] mx-[4%]">
      <div className="text-[white] text-[5vw] text-center">Trending</div>
      <div className=" container mx-[auto] flex flex-wrap gap-[20px] justify-around w-[100%]">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date}
              voteAverage={c.vote_average}
              overView={c.overview}
              type={c.media_type}
              voteaverage={c.vote_average}

            />
          ))}
      </div>
      <CustomPagination setPage={setPage}/>

    </div>
  );
}

export default Trending;
