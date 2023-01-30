import { React, useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import axios from "axios";


const Genre = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage
}
) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1)
  };
  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1)
  
  };

 

  const fetchData = async () => {
    const genreData = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=ad42d50c0ab12bbf3d9862002e45562c&language=en-US`
    );
    console.log(genreData.data.genres);

    setGenres(genreData.data.genres);
  };

  useEffect(() => {
    fetchData();
   
  }, []);

  return (
    <div className="flex flex-wrap justify-center  py-[20px]  gap-[5px]">
      {selectedGenres.map((genre, idx) => (
          <Chip key={genre.id} label={genre.name} style={{color:"white", backgroundColor:"#920000"}} clickable  onDelete={() => handleRemove(genre)} />
        ))}
      {genres &&
        genres.map((genre, idx) => (
          <Chip key={genre.id} label={genre.name} clickable style={{color:"white", backgroundColor:"#4d4d4d"}} onClick={() => handleAdd(genre)} />
        ))}
    </div>
  );
};

export default Genre;

// import Chip from "@mui/material/Chip";

// import axios from "axios";
// import { useEffect } from "react";

// const Genres = ({
//   selectedGenres,
//   setSelectedGenres,
//   genres,
//   setGenres,
//   type,
//   setPage,
// }) => {
//   const handleAdd = (genre) => {
//     setSelectedGenres([...selectedGenres, genre]);
//     setGenres(genres.filter((g) => g.id !== genre.id));
//     setPage(1);
//   };

//   const handleRemove = (genre) => {
//     setSelectedGenres(
//       selectedGenres.filter((selected) => selected.id !== genre.id)
//     );
//     setGenres([...genres, genre]);
//     setPage(1);
//   };

//   const fetchGenres = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
//     );
//     setGenres(data.genres);
//   };

//   useEffect(() => {
//     fetchGenres();

//     return () => {
//       setGenres({}); // unmounting
//     };
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <div style={{ padding: "6px 0" }}>
//       {selectedGenres.map((genre) => (
//         <Chip
//           style={{ margin: 2 }}
//           label={genre.name}
//           key={genre.id}
//           color="primary"
//           clickable
//           size="small"
//           onDelete={() => handleRemove(genre)}
//         />
//       ))}
//       {genres.map((genre) => (
//         <Chip
//           style={{ margin: 2 }}
//           label={genre.name}
//           key={genre.id}
//           clickable
//           size="small"
//           onClick={() => handleAdd(genre)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Genres;
