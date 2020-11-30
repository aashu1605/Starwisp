import React from "react";

function Search(props)
{
  return(
    <div className="searchbar">
    <img src={props.name} alt=""/>
    <p>Search</p>
    </div>
  );
}
export default Search;
