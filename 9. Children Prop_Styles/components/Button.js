import React from 'react'

const Button = ({imageUrl, clickHandler}) => {
    // console.log(imageUrl)
  return ( 
    <button onClick={clickHandler}><img src = {imageUrl} width='90px'/></button>
  )
}

export default Button
