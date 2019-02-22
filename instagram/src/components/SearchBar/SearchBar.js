import React from "react";
import {
  StyledHeader,
  StyledLogoSet,
  StyledSearchBox,
  StyledIconSet
} from "../../myStyledComps/myStyledComps";
import igWordmark from "../../assets/igWordmark.png";

const SearchBar = ({ clearLocalStorage, changeHandler, searchText }) => {
  return (
    <StyledHeader>
      <StyledLogoSet>
        <i onClick={clearLocalStorage} className="logo fab fa-instagram" />
        <img
          src={igWordmark}
          alt="instagram wordmark"
          className="wordmark-search-bar"
        />
      </StyledLogoSet>
      {/* Removed Font Awesome from placeholder because it takes control of the font-family of the placeholder text, turning it into an ugly serif font. */}
      <StyledSearchBox>
        <i className="fas fa-search" />
        <input
          name="searchText"
          value={searchText}
          type="text"
          placeholder="Search Usernames"
          onChange={changeHandler}
          className="search-input"
        />
      </StyledSearchBox>
      <StyledIconSet>
        <i className="icon-searchbar far fa-heart" />
        <i className="icon-searchbar far fa-compass" />
        <i className="icon-searchbar far fa-user" />
      </StyledIconSet>
    </StyledHeader>
  );
};

export default SearchBar;
