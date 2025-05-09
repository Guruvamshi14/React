import React, { useState } from 'react'
import Button from './Button'

// states = [0]

export const Counter = () => {

    const [count, setValue] = useState(10)

    console.log("Hello");
    console.log(count)

    function incrementValue() {
        setValue(count+1);
        setValue(count+1); // It takes the prevValue from states Array then updates it. So Still the value of count is 0
        console.log("CLicked");
        console.log(count)
        // For update Twice we need to previous State
        // setValue((prev) => prev+1)
        // setValue((prev) => prev+1)
        // setValue((prev) => prev+1)
    }
    
  return (
    <div>
        <div>{count}</div>
        <div onClick = {incrementValue}>Increment</div>  
    </div>
  )
}
