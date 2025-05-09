import React from "react";

export const SelectMenu = ({setRegionQuery}) => {

  function changeHandler(e) {
    setRegionQuery(e.target.value);
  }

  return (

    <select defaultValue="" onChange={changeHandler}>
      <option disabled>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
