import React from 'react'

import styles from "./Header.module.css"


export const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.heading}>Where in the world</div>
        <div className={styles.mode}><span>&#127771;</span> Dark Mode</div>
    </div>
  )
}

// export default Header