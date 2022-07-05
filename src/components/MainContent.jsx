import React from "react";
import 'assets/styles/MainContent.css'
import ManualSearch from 'components/ManualSearch'
import CheckmarkSearch from "../assets/styles/CheckmarkSearch";

function MainContent() {
  console.log("MainContent render")
  return (
    <div className="main-content">
      <div className="main-content-container">
        <div className="search-for-properties">
          <h1>Search properties to rent</h1>
          <CheckmarkSearch/>
        </div>
        <ManualSearch/>
      </div>
    </div>
  )
}

export default MainContent