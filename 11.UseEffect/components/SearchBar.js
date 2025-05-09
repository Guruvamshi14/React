import React from "react";

export const SearchBar = ({ setQuery }) => {
  return (
    <div>
      <i class="fa fa-search"></i>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        placeholder="Search  for country"
        name="search"
      />
    </div>
  );
};
