// import React from "react";
// import './Login.css'
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div className="App">
//       <div className="login-container">
//         <h1>MELEDOMIA</h1>
//         <h2>Login</h2>
//         <form className="form">
//           <input type="text" placeholder="Username" required /><br />
//           <input type="password" placeholder="Password" required /><br />
//           <a href="#.com" className="link">Forget Password?</a>
//           <p className="parag">New to Meledomia? <Link to="/Signup" className="link2">Create Account</Link></p>
//           <div>
//             {/* Button for Admin Login */}
//             <button type="submit"><Link to="/admin" className="link3">Admin Login</Link></button>
//             {/* Button for User Login */}
//             <button type="submit"><Link to="/user" className="link3">User Login</Link></button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// Login.js
import React from "react";
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <div className="login-container">
        <h1>MELEDOMIA</h1>
        <h2>Login</h2>
        <div className="login-links">
          
          <button ><Link to="/admin" className="but">Supplier Login</Link></button>
          {/* Link to User Login Page */}
          <button ><Link to="/user" className="but">Buyer Login</Link></button>
        </div>
        <p className="parag">New to Meledomia? <Link to="/Signup" className="link2">Create Account</Link></p>
      </div>
    </div>
  );
}

export default Login;

