import React from "react";
import igWordmark from "../../assets/igWordmark.png";

const SearchBar = ({ clearLocalStorage, changeHandler, searchText }) => {
  return (
    <div className="search-bar">
      <div className="logo-set">
        <i onClick={clearLocalStorage} className="logo fab fa-instagram" />
        <img
          src={igWordmark}
          alt="instagram wordmark"
          className="wordmark-search-bar"
        />
      </div>
      {/* Removed Font Awesome from placeholder because it takes control of the font-family of the placeholder text, turning it into an ugly serif font. */}
      <div className="search-box">
        <i className="fas fa-search" />
        <input
          name="searchText"
          value={searchText}
          type="text"
          placeholder="Search Usernames"
          onChange={changeHandler}
          className="search-input"
        />
      </div>
      <div className="icon-set">
        <i className="icon-searchbar far fa-heart" />
        <i className="icon-searchbar far fa-compass" />
        <i className="icon-searchbar far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
