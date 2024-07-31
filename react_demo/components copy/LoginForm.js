// Login form using State
import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function setEmailHandler(e) {
      setEmail(e.target.value);
    }
  
    function setPasswordHandler(e) {
      setPassword(e.target.value);
    }
  
    return (
      <div style={loginFormStyle}>
        <h3>Login form</h3>
        <form>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" placeholder='Your email' onBlur={setEmailHandler} /><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" placeholder='Your password' onBlur={setPasswordHandler} />
        </form>
        <p>This is your email: </p>
        <p>{email}</p>
        <p>This is your password:</p>
        <p>{password}</p>  
      </div>
    )
  }

  const loginFormStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    width: "500px",
  }

  export default LoginForm;