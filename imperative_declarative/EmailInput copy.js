import { useState } from "react";

const EmailInput = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [correctMessage, setCorrectMessage] = useState("")
    const [blurState, setBlurState] = useState(true)
  

    function evaluateEmail(event) {
      // Get value from input field
      const enteredEmail = event.target.value
      // Set state to opposite of current state
      setBlurState(!blurState)
      // Check for email attributes
      if (enteredEmail.trim() === '' || !enteredEmail.includes("@")) {
        setErrorMessage("The entered email is invalid");
      } else {
        setCorrectMessage("Appears to be a valid email address")
      }
    };

    // Returning the JSX
      return (
        <div style={emailContainer}>

          <h1>Declarative JS Programming example</h1>
          
          <div style={inputContainer}>
            <label htmlFor="emailInput">Enter email:</label>
            <input style={inputStyle} placeholder="Enter your email address" type="email" onBlur={evaluateEmail} />
          </div>

          <div>
            { blurState ? <p style={errorStyle}>{errorMessage}</p> : <p style={correctStyle}>{correctMessage}</p>}
          </div>
          
        </div>
      )
    
    }
    
const emailContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}
const inputContainer = {
  display: "flex",
  gap: "20px",
  fontSize: "1.5em",
}
const inputStyle = {
  width: "300px",
}
const errorStyle = {
  color: "red",
  fontSize: "2em",
}
const correctStyle = {
  color: "green",
  fontSize: "2em"
}

export default EmailInput;