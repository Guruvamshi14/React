import React, { useState } from 'react'
import { SelectMenu } from './SelectMenu'
import { SearchBar } from './SearchBar'
import { CountriesList } from './CountriesList'
import useTheme from '../hooks/useTheme'
import styles from "./Main.module.css"
import stylesMain from '../App.module.css'



export const Main = ({countries}) => {
    const [query, setQuery] = useState("");
    const [regionQuery, setRegionQuery] = useState("");
    const [isDark] = useTheme();

  return (

    <div className={`${styles.Main} ${ isDark ? stylesMain.dark : stylesMain.light }`}>
        <div className={styles.upperPart}>
            <SearchBar setQuery = {setQuery} />
            <SelectMenu setRegionQuery = {setRegionQuery} />
        </div>
        {query === 'umount' ? " " : <CountriesList countries = {countries} query = {query} region = {regionQuery} />}
    </div>

  )
}
