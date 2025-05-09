import React from 'react'

const ApppleBasket = ({apples, number}) => {
  return (
    <div className='AppleBasket'>
        <p>{apples} Apples</p>
        <p>Basket {number}</p>
    </div>
  )
}

export default ApppleBasket
