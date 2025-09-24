


// import React, { useState } from "react";
// import MovieCard from "./component/MovieCard";
// import SearchIcon from "./search.svg";
// import "./App.css";

// const API_URL = "http://www.omdbapi.com?apikey=27c8ae17";

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);

//   const searchMovies = async (title, newSearch = true, pageNumber = 1) => {
//     const response = await fetch(`${API_URL}&s=${title}&page=${pageNumber}`);
//     const data = await response.json();

//     if (newSearch) {
//       setMovies(data.Search || []);
//       setPage(1);
//     } else {
//       setMovies((prevMovies) => [...prevMovies, ...(data.Search || [])]);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>Screen Verse</h1>

//       <div className="search">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for movies"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               searchMovies(searchTerm, true, 1);
//             }
//           }}
//         />
//         <img
//           src={SearchIcon}
//           alt="search"
//           title="Search"
//           tabIndex={0}
//           onClick={() => searchMovies(searchTerm, true, 1)}
//           style={{ cursor: "pointer" }}
//         />
//       </div>

//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard key={movie.imdbID} movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}

//       {/* Load More Button */}
//       {movies?.length > 0 && (
//         <button
//           className="load-more"
//           onClick={() => {
//             const nextPage = page + 1;
//             searchMovies(searchTerm, false, nextPage);
//             setPage(nextPage);
//           }}
//         >
//           Load More
//         </button>
//       )}
//     </div>
//   );
// };

// export default App;





import React, { useState } from "react";
import MovieCard from "./component/MovieCard";
import SearchBar from "./component/searchBar";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=27c8ae17";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const searchMovies = async (title, newSearch = true, pageNumber = 1) => {
    const response = await fetch(`${API_URL}&s=${title}&page=${pageNumber}`);
    const data = await response.json();

    if (newSearch) {
      setMovies(data.Search || []);
      setPage(1);
    } else {
      setMovies((prevMovies) => [...prevMovies, ...(data.Search || [])]);
    }
  };

  return (
    <div className="app">
      <h1>Screen Verse</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={searchMovies}
      />

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

      {/* Load More Button */}
      {movies?.length > 0 && (
        <button
          className="load-more"
          onClick={() => {
            const nextPage = page + 1;
            searchMovies(searchTerm, false, nextPage);
            setPage(nextPage);
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default App;
