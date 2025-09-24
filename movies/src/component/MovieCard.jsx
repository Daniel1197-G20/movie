import React from "react";

const MovieCard = ({ movie }) => {
  const { imdbID, Year, Poster, Title, Type } = movie;

  const imdbUrl = `https://www.imdb.com/title/${imdbID}/`;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    Title + " full " + Type
  )}`;

  // 🎬 Download sites for Movies
  const awafimUrl = `https://awafim.net/?s=${encodeURIComponent(Title)}`;
  const fzmoviesUrl = `https://fzmovies.live//search.php?searchname=${encodeURIComponent(
    Title
  )}`;
  const nkiriUrl = `https://nkiri.com/category/international/?s=${encodeURIComponent(
    Title
  )}`;

  // 📺 Download sites for Series
  const netnaijaUrl = `https://www.thenetnaija.net/search?t=${encodeURIComponent(
    Title
  )}`;
  const o2tvseriesUrl = `https://o2tvseries.com/search/list_all_tv_series.php?search=${encodeURIComponent(
    Title
  )}`;
  const fztvseriesUrl = `https://fztvseries.live//search/${encodeURIComponent(
    Title
  )}`;
  const awafimURL = `https://awafim.net/?s=${encodeURIComponent(Title)}`;

  return (
    <div className="movie-card">
      <a
        href={imdbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="movie-link"
      >
        <div className="movie">
          <div>
            <p>{Year}</p>
          </div>
          <div>
            <img
              src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
              alt={Title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div>
            <span style={{ textTransform: "capitalize" }}>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
      </a>

      <div
        className="movie-actions"
        style={{ marginTop: 8, display: "flex", gap: 8 }}
      >
        {/* Stream Button */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Stream
        </a>

        {/* Conditional Downloads */}
        {Type === "movie" ? (
          <div className="dropdown">
            <button className="btn">⤓ Download Movie</button>
            <div className="dropdown-content">
              <a href={awafimUrl} target="_blank" rel="noopener noreferrer">
                Awafim
              </a>
              <a href={fzmoviesUrl} target="_blank" rel="noopener noreferrer">
                Fzmovies 
              </a>
              <a href={nkiriUrl} target="_blank" rel="noopener noreferrer">
                Nkiri
              </a>
            </div>
          </div>
        ) : (
          <div className="dropdown">
            <button className="btn">⤓ Download Series</button>
            <div className="dropdown-content">
              <a href={netnaijaUrl} target="_blank" rel="noopener noreferrer">
                Netnaija
              </a>
              <a href={o2tvseriesUrl} target="_blank" rel="noopener noreferrer">
                O2TVSeries
              </a>
              <a href={fztvseriesUrl} target="_blank" rel="noopener noreferrer">
                FzTVSeries
              </a>
              <a href={awafimURL} target="_blank" rel="noopener noreferrer">
                MkvCage
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
