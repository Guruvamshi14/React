import React from 'react'

const ApppleBasket = ({apples, number}) => {
  console.log(apples);
  return (
    <div className='AppleBasket'>
        <p>{apples} Apples</p>
        <p>Basket {number} {apples === 10 ? "Full" : false}</p>
    </div>
  )
}

export default ApppleBasket
