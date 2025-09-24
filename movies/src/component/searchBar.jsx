import React, { useState } from "react";
import SearchIcon from "./search.svg";

const SearchBar = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Easter Egg: Trigger secret animation when typing "honey"
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchTerm.toLowerCase() === "honey") {
        alert("🍯 Sweet Surprise! You unlocked the Honey Easter Egg!");
      } else {
        searchMovies(searchTerm);
      }
    }
  };

  return (
    
    <div className="search-container">
         <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovies(searchTerm, true, 1);
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          title="Search"
          tabIndex={0}
          onClick={() => searchMovies(searchTerm, true, 1)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search for movies or series..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-btn" onClick={() => searchMovies(searchTerm)}>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
