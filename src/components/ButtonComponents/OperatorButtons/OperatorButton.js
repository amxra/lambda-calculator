import React from "react";

const OperatorButton = (props) => {
  const {button, setButton} = props
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
     {button}
    </button>
  );
};

export default OperatorButton;