import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
function Login(){
    return (
        <div className="App">
          <div className="login-container">
            <h1>MELEDOMIA</h1>
            <h2>Login</h2>
            <form className="form">
              <input type="text" placeholder="Name" required /><br />
              <input type="password" placeholder="Password" required /><br />
              <a href="#.com" className="link">Forget Password?</a>
              <button type="submit"><Link to="/" className="link3" >Login</Link></button>
            
              <p className="parag">New to Meledomia?<Link to="/Signup" className="link2" >Create Accout</Link></p>
            </form>
          </div>
        </div>
      );
}


export default Login;

