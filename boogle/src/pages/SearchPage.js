import Search from "../components/Search";
import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../components/StateProvide";
import useGoogleSearch from "../components/useGoogleSearch";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <h1>{term}</h1>
      <Search hideButtons={true} />
      <div className="searchPage__header"></div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
