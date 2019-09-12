import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "./../../../data";
import "./operator.css"

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state

    const [operator, setOperator] = useState(operators)
  return (
    <div className = {"operatorButton"}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         operator.map(operators =>{
          return  <OperatorButton
           key =  {operators}
           operator = {operators}
           />
         })
       }
    </div>
  );
};

export default Operators;