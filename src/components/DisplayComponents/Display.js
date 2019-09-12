import React, {useState} from "react";

const Display = () => {
  const [solution, setSolution] = useState('0')
  return <div className="display">{/* Display any props data here */}{solution}</div>;
};

export default Display