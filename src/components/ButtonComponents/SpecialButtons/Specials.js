import React, {useState} from "react";
import {specials} from "./../../../data";
import SpecialButton from "./SpecialButton"
import "./specials.css"

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  const [special, setSpecial] = useState(specials);

  return (
    <div className = {'specialButton'}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         special.map(specials => {
           return <SpecialButton
           key = {specials}
           character = {specials}
           />
         })
       }
    </div>
  );
};

export default Specials;