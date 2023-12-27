import React from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Routes   } from 'react-router-dom'
import  Navbar from  "./component/Navbar/Navbar"
import Signup from './component/Signup'
import Home from './component/Home'
import Login from './component/Login'
import About from './component/About'
import Contact from './component/Contact' 
import Menu from './component/Menu'
import Cart from './component/Cart'
import AdminLogin from './component/admin/AdminLogin'
import UserLogin from './component/admin/UserLogin'
import AdminDashboard from './component/admin/AdminDashboard'


const App = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/user" element={<UserLogin />}/>
        <Route path="/admin" element={<AdminLogin />}/>
        <Route path="/admindash" element={<AdminDashboard />}/>
       

        
      </Routes>
    </Router>
      
    
  )
}
export default App;
// import React from 'react'
// import Admindashboard from './component/admin/AdminDashboard'

// const App = () => {
//   return (
//     <div>
//       <Admindashboard/>
//     </div>
//   )
// }

// export default App