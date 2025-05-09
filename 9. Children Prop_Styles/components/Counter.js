import React, { useState } from 'react'
import Button from './Button'

import styles from './Counter.module.css'


export const Counter = ({children}) => {

    console.log(styles);

    const [count, setValue] = useState(10)

    console.log(children);

    function incrementValue() {
        setValue(count+1);
        setValue(count+1); // It takes the prevValue from states Array then updates it. So Still the value of count is 0
        console.log("CLicked");
        // For update Twice we need to previous State
        setValue((prev) => prev+1)
        setValue((prev) => prev+1)
        setValue((prev) => prev+1)
    }
    
  return (
    <div>
        <div className={styles.cent}>{count}</div>
        <div className={[styles.increment, styles.cent].join(' ')} onClick = {incrementValue}>Increment</div>  
    </div>
  )
}
