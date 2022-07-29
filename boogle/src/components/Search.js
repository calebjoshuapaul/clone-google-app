import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input />
        <MicIcon className="search__micIcon" />
      </div>

      <div className="search__buttons">
        <Button variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}

export default Search;
