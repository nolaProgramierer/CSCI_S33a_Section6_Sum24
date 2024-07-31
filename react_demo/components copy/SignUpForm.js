// Signup form
import { useState } from "react";

const SignUpForm = () => {
    
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(null);
  
    function emailUpdateHandler(e) {
      setEmail(e.target.value);
    }
  
    function updateAgreeHanlder(e) {
      setAgreed(e.target.checked);
    }
  
    function signUpHandler(e) {
      const userData = {userEmail: email, userAgrees: agreed};
      // Submit to server and process response
      console.log(userData)
      e.preventDefault()
    }
  
    return (
      <div>
      <h3>Sign up form example</h3>
      <form>
        <div>
          <label htmlFor="email">Your email here:</label>
          <input type="email" id='email' placeholder="Email" onChange={emailUpdateHandler} />
        </div>
        <div>
          <label htmlFor='agree'>Agree to terms and conditions</label>
          <input type="checkbox" id="agree" onChange={updateAgreeHanlder} />
        </div>
        <button type='Submit' onClick={signUpHandler}>Click to update</button>
      </form>
      </div>
    )
  }

export default SignUpForm;