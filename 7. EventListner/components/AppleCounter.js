import React, { useState } from "react";
import leftArrow from "url:../assets/images/leftArrow.png";
import rightArrow from "url:../assets/images/rightArrow.png";
import Button from "./Button";
import ApppleBasket from "./ApppleBasket";
import App from "../App";


const AppleCounter = ({ root }) => {
  // const root = createRoot(document.querySelector('#root'))

  const [rightAppleCount, setRightAppleCount] = useState(0)
  const [leftAppleCount, setLeftAppleCount] = useState(10 - rightAppleCount)

  console.log("clicked");


  const leftClickHandler = () => {
    console.log("Left BUtton");
    if (rightAppleCount > 0) {
      setLeftAppleCount(leftAppleCount+1)
      setRightAppleCount(rightAppleCount-1)

      console.log(leftAppleCount)
      console.log(rightAppleCount)
    }
  };

  const rightClickHandler = () => {
    console.log("Right BUtton");
    if (leftAppleCount > 0) {
      setLeftAppleCount(leftAppleCount - 1)
      setRightAppleCount(rightAppleCount + 1)

      console.log(leftAppleCount)
      console.log(rightAppleCount)

    }
  };

  return (
    <div className="AppleCounter">
      <ApppleBasket apples={leftAppleCount} number={1} />
      <Button imageUrl={leftArrow} clickHandler={leftClickHandler} />
      <Button imageUrl={rightArrow} clickHandler={rightClickHandler} />
      <ApppleBasket apples={rightAppleCount} number={2} />
    </div>
  );
};

export default AppleCounter;

// UseState returns an array , that gives the (value and setFunction of s variable)

// The UseState updates the values Based on the Previous Values 