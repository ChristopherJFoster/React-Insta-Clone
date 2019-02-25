import React from "react";
import styled from "styled-components";
import igWordmark from "../../assets/igWordmark.png";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

const StyledLogoSet = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  align-items: center;
  margin-left: 30px;
  .logo {
    font-size: 3em;
    padding-right: 25px;
    border-right: 1px solid grey;
    cursor: pointer;
  }
  .wordmark-search-bar {
    margin-left: 25px;
    padding-top: 10px;
    width: 160px;
    height: 40px;
  }
`;

const StyledSearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  i {
    font-size: 1.6em;
    padding: 0 5px 0 10px;
  }
  .search-input {
    width: 150px;
    font-size: 1.6em;
    border: none;
    padding: 7px 5px 5px 5px;
  }
`;

const StyledIconSet = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin-right: 30px;
  .icon-searchbar {
    font-size: 3em;
  }
`;

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
