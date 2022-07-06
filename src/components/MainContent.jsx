import React from "react";
import 'styles/MainContent.css'
import ManualSearch from 'components/ManualSearch'
import CheckmarkSearch from "components/CheckmarkSearch";
import SearchResult from "./SearchResult";

function MainContent() {
  // console.log("MainContent render")
  return (
    <div className="main-content">
      <div className="main-content-container">
        <div className="search-for-properties">
          <h1>Search properties to rent</h1>
          <CheckmarkSearch/>
        </div>
        <ManualSearch/>
        <SearchResult/>
      </div>
    </div>
  )
}

export default MainContent