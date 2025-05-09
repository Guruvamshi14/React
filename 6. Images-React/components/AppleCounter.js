import React from 'react'
import leftArrow from "url:../assets/images/leftArrow.png"
import rightArrow from "url:../assets/images/rightArrow.png"
import Button from './Button'
import ApppleBasket from './ApppleBasket'

export const AppleCounter = () => {
  return (
    <div className='AppleCounter'>
        <ApppleBasket apples = {10} number = {1} />
        <Button imageUrl = {leftArrow} />
        <Button imageUrl = {rightArrow} />
        <ApppleBasket apples = {0} number = {1} />
    </div>
  )
}
