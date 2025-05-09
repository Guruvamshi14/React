import React from 'react'
import  AppleCounter from './components/AppleCounter'



const App = ({root}) => {
  return (
    <div>
      {/* <h1 onClick={() => {
        console.log("Clicked the Image");
      }}>Hello World</h1> */}
      <AppleCounter root = {root} />
    </div>
  )
}

export default App