import React, { useState } from 'react'
import { SelectMenu } from './SelectMenu'
import { SearchBar } from './SearchBar'
import { CountriesList } from './CountriesList'

import styles from "./Main.module.css"


export const Main = ({countries}) => {
//   console.log(countries);
    const [query, setQuery] = useState("");
  return (

    <div className={styles.Main}>
        <div className={styles.upperPart}>
            <SearchBar setQuery = {setQuery} />
            <SelectMenu />
        </div>
        <CountriesList countries = {countries} query = {query} />
    </div>

  )
}
