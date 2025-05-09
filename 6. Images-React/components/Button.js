import React from 'react'

const Button = ({imageUrl}) => {
    console.log(imageUrl)
  return ( 
    <button><img src = {imageUrl} width='90px'/></button>
  )
}

export default Button
