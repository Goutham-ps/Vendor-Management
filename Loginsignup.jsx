import React, { useState } from 'react'
import './Loginsignup.css'


import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";


const Loginsignup = () => {

    const[action,setAction]=useState("Sign Up");




  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'>
            </div>

            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    <img src={user_icon} alt=""/>
                    <input type="text"placeholder="Name" required/>
                </div>}
                
           
         
                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email Id" required/>
                </div>
           
           
                <div className='input'>
                    <img src={password_icon}  alt=""/>
                    <input type="password"placeholder="Password" required/>
                </div>    
            </div>
            {action==="Sign Up"?<div></div>: <div className="forgot-password">Forgot Password? <span>click Here</span></div>}
           
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <br/>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>  
    </div>
  );
};

export default Loginsignup
