// AdminLogin.js
import React from "react";
import { Link } from "react-router-dom";
function AdminLogin() {
  return (
    <div className="App">
      <div className="login-container">
        <h1>MELEDOMIA</h1>
        <h2>Supplier Login</h2>
        <form className="form">
          <input type="text" placeholder="User Name" required /><br />
          <input type="password" placeholder="Password" required /><br />
          <a href="#.com" className="link">Forget Password?</a>
          <button type="submit"><Link to='/admindash' className="but">Supplier Login</Link></button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
