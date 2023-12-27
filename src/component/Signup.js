import React from "react";
import './Signup.css'
import { Link } from "react-router-dom";
function Signup(){

    return (
        <div className="App">
         
          <div className="login-containe">
           
            <h3>Signup</h3>
            <form>
              
              <input type="text" placeholder="Firstname" required /><br />
              <input type="text" placeholder="Lastname" required /><br />
              <input type="text" placeholder="Email" required /><br />
              <input type="text" placeholder="Mobilenumber" required /><br />

              <input type="password" placeholder="Enter your Password" required /><br />
              <input type="password" placeholder="Re-Enter your Password" required /><br />
              <button type="submit">
                <Link to="/Login" className="sign">Sign in</Link></button>
            </form>
          </div>
        </div>
      );
}

export default Signup;