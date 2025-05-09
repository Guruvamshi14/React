import React from 'react'
import  AppleCounter from './components/AppleCounter'
import { Counter } from './components/Counter'



const App = ({root}) => {
  return (
    <div>
      {/* <h1 onClick={() => {
        console.log("Clicked the Image");
      }}>Hello World</h1> */}
      <Counter> Hello</Counter>
      <AppleCounter root = {root} />

        {/* {false ? <Counter /> : <AppleCounter />} */}

    </div>
  )
}

export default App