import React, { useContext } from 'react'

import styles from "./Header.module.css"

import stylesMain from '../App.module.css'

import useTheme from '../hooks/useTheme'

export const Header = () => {

  // const [isDark, setDarkMode] = theme

  const [isDark, setDarkMode] = useTheme();

  // console.log(`In Headers Theme Context Value ${val}`)
  
  console.log(isDark);

  return (
    <div className={ `${ isDark ? styles.dark : styles.light } ${styles.header}`}>
        <div className={styles.heading}>Where in the world</div>
        <button className={styles.mode}
          onClick={() => {
            setDarkMode(prev => !prev)
            console.log(`Dark Mode : ${isDark}`);
            if (isDark) {
              localStorage.setItem('theme',"Light")
            } else {
              localStorage.setItem('theme', "dark")
            }
          }}
          ><span>&#127771;</span> {isDark ? 'Light' :'Dark'} 
        </button>
    </div>
  )
}

// export default Header