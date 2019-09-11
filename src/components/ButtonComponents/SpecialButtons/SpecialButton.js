import React from "react";

const SpecialButton = (props) => {

  const {character, setCharacter} = props
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {character}
    </button>
  );
};

export default SpecialButton;