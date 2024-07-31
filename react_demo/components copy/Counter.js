import { useState } from "react";

// Incremental counter
const Counter = () => {
    const [counter, setCounter] = useState(0);
  
    function incrementCounterHandler() {
      // setCounter(counter + 1);
      setCounter((prevVal) => (prevVal + 1));
    }
    return (
      <div style={counterStyle}>
        <h3>Counter Example</h3>
        <button style={btnStyle} onClick={incrementCounterHandler}>Click here!</button>
        <p>Counter Value: {counter}</p>
      </div>
    )
  }

  const counterStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  }
  const btnStyle = {
    height: 40,
    width: 120,
    color: "white",
    backgroundColor: "blue",
    fontSize: "16px"
  }

  export default Counter;