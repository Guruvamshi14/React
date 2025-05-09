import React, { useState } from 'react'
import { SelectMenu } from './SelectMenu'
import { SearchBar } from './SearchBar'
import { CountriesList } from './CountriesList'
import { useOutletContext } from 'react-router'

import styles from "./Main.module.css"
import stylesMain from '../App.module.css'



export const Main = ({countries}) => {
    const [query, setQuery] = useState("");

        const theme = useOutletContext();
        console.log(`In Main ${theme}`);

        const [isDark] = theme

  return (

    <div className={`${styles.Main} ${ isDark ? stylesMain.dark : stylesMain.light }`}>
        <div className={styles.upperPart}>
            <SearchBar setQuery = {setQuery} />
            <SelectMenu />
        </div>
        {query === 'umount' ? " " : <CountriesList countries = {countries} query = {query} />}
    </div>

  )
}
