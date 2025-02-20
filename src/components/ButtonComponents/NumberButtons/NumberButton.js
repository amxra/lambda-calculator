import React from "react";

const NumberButton = (props) => {

  

  return (
    <button className = {'number'} id = {'div' + props.digit} onClick = {() => props.setDigit}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.digit}
    </button>
  );
};

export default NumberButton;