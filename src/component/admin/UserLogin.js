// UserLogin.js
import React from "react";

function UserLogin() {
  return (
    <div className="App">
      <div className="login-container">
        <h1>MELEDOMIA</h1>
        <h2>User Login</h2>
        <form className="form">
          <input type="text" placeholder="User Name" required /><br />
          <input type="password" placeholder="Password" required /><br />
          <a href="#.com" className="link">Forget Password?</a>
          <button type="submit">User Login</button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
