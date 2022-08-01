import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvide";
import { actionTypes } from "./reducer";
import "./Search.css";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  //useHistory replaced by useNavigate hook.
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    //helps navigate to search page.
    if (input) navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search__micIcon" />
      </div>

      <div
        className={
          !hideButtons
            ? "search__buttons"
            : "search__buttons search__buttonHidden"
        }
      >
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
