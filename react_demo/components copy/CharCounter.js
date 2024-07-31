// Count number of characters by counting the length of a string
import { useState } from "react";

const CharCounter = () => {
    // Setting state variables
    const [userInput, setUserInput] = useState(0);
  
    function inputHandler(e) {
      setUserInput(e.target.value)
    }
  
    // Using a native JS property on a React state variable and reassigning it
    const numChars = userInput.length;
  
    return (
      <div style={counterStyle}>
        <h3>CharCounter</h3>
        <input type='text' onChange={inputHandler} />
        <p>Number of characters entered:</p>
        <p>{numChars}</p>
      </div>
    )
  }
  
const counterStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    backgroundColor: 'beige',
    padding: "30px",
    margin: "30px"
}
  export default CharCounter;