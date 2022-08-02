import Search from "../components/Search";
import React from "react";
import "./SearchPage.css";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { useStateValue } from "../components/StateProvide";
import useGoogleSearch from "../components/useGoogleSearch";

function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons={true} />
          <div className="searchPage__options">
            <div className="options__left">
              <div className="option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="options__right">
              <div className="option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <a href={item.link}>{item.displayLink}</a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
