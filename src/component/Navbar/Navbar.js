import React ,{useState}from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const {isMobile,setIsMobile}=useState(false);
  return (
    <nav className='navbar'>
        <img src='https://static.vecteezy.com/system/resources/previews/017/737/967/original/restaurant-logo-on-letter-m-concept-with-chef-hat-spoon-and-fork-for-restaurant-logo-free-vector.jpg' alt='text' className='image'/>
        <h3 className='logo'>MELEDOMIA</h3>

        <ul className={isMobile ? 'nav-links-mob' :'nav-links'}>
            <Link to="/" className='home'>
                <li>
                    Home
                </li>
            </Link>
            <Link to="/Menu" className='menu'>
                <li>
                    Products
                </li>
            </Link>
            <Link to="/Contact" className='contact'>
                <li>
                    Contact
                </li>
            </Link>
            <Link to="/About" className='about'>
                <li>
                    About
                </li>
            </Link>
            {/* <Link to="/Signup" className='signup'>
                <li>
                    Signup
                </li>
            </Link> */}
            <Link to="/Login" className='login'>
                <li>Login</li></Link>
            <Link to="/Cart" className='cart'>
                <li>🛒</li></Link>
        </ul>
        <button className='mob-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? <h1>x</h1> :<h1>=</h1>}
        </button>
    </nav>
  )
}
export default Navbar;